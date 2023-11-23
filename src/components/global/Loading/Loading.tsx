import { ActivityIndicator, View } from "react-native";

import styles from "./Loading.styles";
import { LoadingProps as Props } from "./Loading.types";
import { useThemeColor } from "hooks/useThemeColor";

const Loading: React.FC<Props> = props => {
  const secondary = useThemeColor({ colorName: "secondary" });
  return (
    <View style={styles.container}>
      <ActivityIndicator {...props} color={secondary} />
    </View>
  );
};

export default Loading;
