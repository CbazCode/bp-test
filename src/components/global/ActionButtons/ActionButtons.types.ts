// Interfaces and types from component ActionButtons

import { StyleProp, TextStyle, ViewStyle } from "react-native";

// Component Props
export interface ActionButtonsProps {
  textAbove: string;
  textStyleAbove?: StyleProp<TextStyle>;
  textBelow: string;
  textStyleBelow?: StyleProp<TextStyle>;
  styleAbove: StyleProp<ViewStyle>;
  styleBelow: StyleProp<ViewStyle>;
  onPressAbove: () => void;
  onPressBelow: () => void;
  loadingAbove?: boolean;
  loadingBelow?: boolean;
  disabledAbove?: boolean;
  disabledBelow?: boolean;
}
