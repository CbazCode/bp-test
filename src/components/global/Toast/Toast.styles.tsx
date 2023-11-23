import { StyleSheet } from "react-native";

import Colors from "styles/Colors";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: "8%",
    left: "4%",
    right: "4%",
    zIndex: 1,
    elevation: 1,
    borderRadius: 10,
    minHeight: 29,
    maxHeight: 100,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: Colors.light.black,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: Colors.light.white,
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center"
  },
  success: {
    backgroundColor: Colors.light.success
  },
  error: {
    backgroundColor: Colors.light.error
  },
  warning: {
    backgroundColor: Colors.light.warning
  },
  info: {
    backgroundColor: Colors.light.info
  }
});

export default styles;
