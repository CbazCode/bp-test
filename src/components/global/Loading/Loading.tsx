import React from "react";
import { ActivityIndicator } from "react-native";

import styles from "./Loading.styles";
import { LoadingProps as Props } from "./Loading.types";
import { View } from "components/Themed";
import { useThemeColor } from "hooks/useThemeColor";

const Loading: React.FC<Props> = props => {
  const primary = useThemeColor({ colorName: "primary" });
  return (
    <View style={styles.container}>
      <ActivityIndicator {...props} color={primary} />
    </View>
  );
};

Loading.defaultProps = {};

export default Loading;
