import { DeviceEventEmitter } from "react-native";

import { ToastOptions } from "./Toast.types";
import { CONSTANTS } from "config/constants";

const { APP } = CONSTANTS;
const { SHOW_TOAST_MESSAGE } = APP;

export const toast = {
  info: (options: ToastOptions) => {
    DeviceEventEmitter.emit(SHOW_TOAST_MESSAGE, { ...options, type: "info" });
  },
  success: (options: ToastOptions) => {
    DeviceEventEmitter.emit(SHOW_TOAST_MESSAGE, {
      ...options,
      type: "success"
    });
  },
  danger: (options: ToastOptions) => {
    DeviceEventEmitter.emit(SHOW_TOAST_MESSAGE, { ...options, type: "danger" });
  }
};
