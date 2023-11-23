import { StyleSheet } from "react-native";

import Colors from "styles/Colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 4
  },
  text: {
    color: Colors.light.secondary,
    fontSize: 20,
    fontWeight: "bold"
  },
  rotate: {
    transform: [{ rotate: "180deg" }]
  },
  shadow: {
    shadowColor: Colors.light.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    backgroundColor: Colors.light.primary,
    borderRadius: 100,
    paddingHorizontal: 18,
    paddingVertical: 10
  }
});

export default styles;
