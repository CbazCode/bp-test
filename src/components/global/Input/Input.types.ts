// Interfaces and types from component Input

import { UseFormRegisterReturn } from "react-hook-form";
import { TextInputProps } from "react-native";

// Component Props
export interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  isDate?: boolean;
  name: UseFormRegisterReturn["name"];
}

export interface InputMethods {
  onChange: (value: string) => void;
}
