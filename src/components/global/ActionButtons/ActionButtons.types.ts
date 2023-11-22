// Interfaces and types from component ActionButtons

import { StyleProp, TextStyle, ViewProps, ViewStyle } from "react-native";

// Component Props
export interface ActionButtonsProps extends ViewProps {
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
  style?: StyleProp<ViewStyle>;
}
