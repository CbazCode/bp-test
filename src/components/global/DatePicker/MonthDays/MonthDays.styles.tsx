import { StyleSheet } from "react-native";

import Colors from "styles/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  month: {
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  monthText: {
    color: Colors.light.black,
    fontSize: 20,
    fontWeight: "600"
  }
});

export default styles;
