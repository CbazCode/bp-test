import { forwardRef } from "react";
import { useController } from "react-hook-form";
import { Text, TextInput } from "react-native";

import styles from "./Input.styles";
import { InputProps as Props } from "./Input.types";

const Input = forwardRef<TextInput, Props>((props, ref) => {
  const { label, error, name, editable } = props;
  const errorStyle = !!error && styles.inputError;
  const editableStyle = !editable && styles.inputDisabled;
  const { field } = useController({ name });
  const { value, onChange } = field;

  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...props}
        style={[styles.input, errorStyle, editableStyle, props.style]}
        value={value}
        onChangeText={onChange}
        ref={ref}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </>
  );
});

export default Input;
