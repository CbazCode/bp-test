import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

import styles from "./Button.styles";
import { ButtonProps as Props } from "./Button.types";
import { useThemeColor } from "../../../hooks/useThemeColor";

const Button: React.FC<Props> = props => {
  const { disabled, style, text } = props;
  const { textStyle, loading = false, ...rest } = props;
  const primary = useThemeColor({ colorName: "secondary" });
  const disabledStyle = loading || disabled ? { opacity: 0.6 } : {};

  return (
    <TouchableOpacity
      {...rest}
      style={[styles.button, style, disabledStyle]}
      disabled={loading || disabled}
    >
      {loading && <ActivityIndicator color={primary} style={styles.loading} />}
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {};

export default Button;
