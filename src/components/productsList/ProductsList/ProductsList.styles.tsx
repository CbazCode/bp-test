import { StyleSheet } from "react-native";

import Colors from "styles/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  error: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: Colors.light.gray
  },
  contentContainer: {
    borderColor: Colors.light.gray,
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 16
  },
  refreshControl: {
    backgroundColor: Colors.light.background
  }
});

export default styles;
