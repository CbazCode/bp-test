import React, { useState } from "react";
import { Image as RnImage, NativeSyntheticEvent } from "react-native";
import { ImageErrorEventData } from "react-native";

import styles from "./Image.styles";
import { ImageProps as Props } from "./Image.types";
import { CONSTANTS } from "config/constants";
const { APP } = CONSTANTS;
const { FALLBACK_IMAGE } = APP;

const Image: React.FC<Props> = props => {
  const { uri, ...rest } = props;
  const [showImageError, setShowImageError] = useState(false);
  const fallback = showImageError ? FALLBACK_IMAGE : undefined;

  const onError = (e: NativeSyntheticEvent<ImageErrorEventData>) => {
    setShowImageError(true);
    rest.onError?.(e);
  };
  return (
    <RnImage
      {...rest}
      source={{ uri: fallback ?? uri }}
      onError={onError}
      height={140}
      width={140}
      borderRadius={20}
      style={styles.container}
    />
  );
};

export default Image;
