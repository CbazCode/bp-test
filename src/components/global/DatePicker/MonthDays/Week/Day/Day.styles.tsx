import { StyleSheet } from "react-native";

import Colors from "styles/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    height: 24
  },
  activeDate: {
    color: Colors.light.black
  },
  day: {
    color: Colors.light.black,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
    alignItems: "center",
    paddingVertical: 4
  },
  activeCircle: {
    position: "absolute",
    backgroundColor: Colors.light.primary,
    width: 36,
    height: 36,
    opacity: 0.4,
    borderRadius: 50
  },
  hideExtraDays: {
    color: "transparent",
    opacity: 0
  }
});

export default styles;
