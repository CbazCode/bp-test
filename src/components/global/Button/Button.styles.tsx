import { StyleSheet } from "react-native";

import Colors from "styles/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: Colors.light.primary,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center"
  },
  text: {
    fontSize: 14,
    fontWeight: "500"
  },
  loading: {
    marginRight: 8
  }
});

export default styles;
