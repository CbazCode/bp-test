// Interfaces and types from component Image

import { ImageProps as RnImageProps } from "react-native";

// Component Props
export interface ImageProps extends Omit<RnImageProps, "source"> {
  uri: string;
}
