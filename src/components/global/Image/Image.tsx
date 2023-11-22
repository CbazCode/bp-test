import React, { useState } from "react";
import { Image as RnImage, NativeSyntheticEvent } from "react-native";
import { ImageErrorEventData } from "react-native";

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
  return <RnImage source={{ uri: fallback ?? uri }} onError={onError} />;
};

export default Image;
