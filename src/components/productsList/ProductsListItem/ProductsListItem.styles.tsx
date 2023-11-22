import { StyleSheet } from "react-native";

import Colors from "styles/Colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16
  },
  textWrapper: {
    flex: 1
  },
  id: {
    marginTop: 4,
    fontSize: 12,
    color: Colors.light.darkGray,
    fontWeight: "600"
  }
});

export default styles;
