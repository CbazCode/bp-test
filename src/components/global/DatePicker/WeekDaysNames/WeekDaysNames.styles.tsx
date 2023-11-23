import { StyleSheet } from "react-native";

import Colors from "styles/Colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: 16,
    alignItems: "center",
    paddingTop: 16
  },
  weekDayName: {
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
    alignItems: "center",
    color: Colors.light.secondary
  }
});

export default styles;
