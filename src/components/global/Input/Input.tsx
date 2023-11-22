import React from "react";
import { useController } from "react-hook-form";
import { Text, TextInput } from "react-native";

import styles from "./Input.styles";
import { InputProps as Props } from "./Input.types";

const Input: React.FC<Props> = props => {
  const { label, error, name } = props;
  const errorStyle = !!error && styles.inputError;
  const { field } = useController({ name });
  const { value, onChange } = field;

  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...props}
        style={[styles.input, errorStyle, props.style]}
        value={value}
        onChangeText={onChange}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </>
  );
};

Input.defaultProps = {};

export default Input;
