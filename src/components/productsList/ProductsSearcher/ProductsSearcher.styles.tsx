import { StyleSheet } from "react-native";

import Colors from "styles/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 0,
    paddingHorizontal: 16,
    marginTop: 42,
    marginBottom: 32
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: "500",
    color: Colors.light.black,
    borderWidth: 1,
    borderColor: Colors.light.gray,
    width: "100%"
  }
});

export default styles;
