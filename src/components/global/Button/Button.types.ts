// Interfaces and types from component Button

import { StyleProp, TextStyle, TouchableOpacityProps } from "react-native";

// Component Props
export interface ButtonProps extends TouchableOpacityProps {
  text: string;
  loading?: boolean;
  textStyle?: StyleProp<TextStyle>;
}
