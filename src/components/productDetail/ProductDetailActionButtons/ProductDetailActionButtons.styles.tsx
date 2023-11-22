import { StyleSheet } from "react-native";

import Colors from "styles/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  edit: {
    backgroundColor: Colors.light.lightGray
  },
  delete: {
    backgroundColor: Colors.light.danger
  },
  textEdit: {
    color: Colors.light.secondary
  },
  textDelete: {
    color: Colors.light.white,
    fontWeight: "bold"
  }
});

export default styles;
