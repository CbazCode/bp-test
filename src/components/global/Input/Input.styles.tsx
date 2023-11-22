import { StyleSheet } from "react-native";

import Colors from "styles/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  label: {
    fontSize: 12,
    fontWeight: "500",
    marginHorizontal: 16,
    marginTop: 16
  },
  error: {
    fontSize: 12,
    color: Colors.light.danger,
    marginHorizontal: 16,
    marginTop: 8
  },
  input: {
    marginHorizontal: 16,
    marginTop: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.light.gray,
    borderRadius: 4
  },
  inputError: {
    borderColor: Colors.light.danger
  }
});

export default styles;
