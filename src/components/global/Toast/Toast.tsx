import React, { useCallback, useEffect, useRef, useState } from "react";
import { Text, DeviceEventEmitter, Animated } from "react-native";

import styles from "./Toast.styles";
import { ToastProps as Props, ToastOptions, ToastType } from "./Toast.types";
import { CONSTANTS } from "config/constants";

const { APP } = CONSTANTS;
const { SHOW_TOAST_MESSAGE } = APP;

const Toast: React.FC<Props> = () => {
  const [messageType, setMessageType] = useState<ToastType>();
  const [message, setMessage] = useState<string | null>(null);
  const [timeOutDuration, setTimeOutDuration] = useState(2000);
  const timeOutRef = useRef<NodeJS.Timeout>();
  const [animatedOpacity] = useState(new Animated.Value(0));

  const onNewToast = (data: ToastOptions) => {
    const { duration, message, type } = data ?? {};
    if (duration) setTimeOutDuration(duration);
    setMessage(message);
    setMessageType(type);
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
  };

  const onCloseToast = useCallback(() => {
    setMessage(null);
    setTimeOutDuration(5000);
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start();
    clearInterval(timeOutRef?.current);
  }, [animatedOpacity]);

  useEffect(() => {
    if (!message) return;
    timeOutRef.current = setInterval(() => {
      if (timeOutDuration === 0) {
        onCloseToast();
        return;
      }
      setTimeOutDuration(prev => prev - 1000);
    }, 1000);
    return () => clearInterval(timeOutRef.current);
  }, [onCloseToast, message, timeOutDuration]);

  useEffect(() => {
    DeviceEventEmitter.addListener(SHOW_TOAST_MESSAGE, onNewToast);
    return () => {
      DeviceEventEmitter.removeAllListeners();
    };
  }, []);

  if (!message) return null;

  return (
    <Animated.View
      style={[
        styles.container,
        styles[messageType ?? "info"],
        { opacity: animatedOpacity }
      ]}
    >
      <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
};

Toast.defaultProps = {};

export default Toast;
