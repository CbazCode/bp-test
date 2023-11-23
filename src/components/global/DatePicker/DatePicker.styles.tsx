import { StyleSheet } from "react-native";

import Colors from "styles/Colors";

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
    backgroundColor: Colors.light.black,
    opacity: 0.6
  },
  content: {
    paddingVertical: 12,
    height: "55%",
    width: "100%",
    backgroundColor: Colors.light.white,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0
  },
  activeMonthStyle: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.light.primary
  },
  activeMonthTextStyle: {
    color: Colors.light.secondary
  },
  month: {
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  monthText: {
    color: Colors.light.black,
    fontSize: 20,
    fontWeight: "600"
  },
  button: {
    marginHorizontal: 16
  }
});

export default styles;
