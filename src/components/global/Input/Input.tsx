import { forwardRef, useImperativeHandle } from "react";
import { useController } from "react-hook-form";
import { Text, TextInput } from "react-native";

import styles from "./Input.styles";
import { InputMethods, InputProps as Props } from "./Input.types";

const Input = forwardRef<InputMethods, Props>((props, ref) => {
  const { label, error, name, editable, isDate = false, value } = props;
  const errorStyle = !!error && styles.inputError;
  const editableStyle = !isDate && !editable && styles.inputDisabled;
  const { field } = useController({ name });
  const { onChange } = field;

  useImperativeHandle(ref, () => ({
    onChange: (value: Date) => {
      field?.onChange(value);
    }
  }));

  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...props}
        value={value ?? field.value}
        style={[styles.input, errorStyle, editableStyle, props.style]}
        onChangeText={onChange}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </>
  );
});

export default Input;
