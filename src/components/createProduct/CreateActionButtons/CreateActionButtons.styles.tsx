import { StyleSheet } from "react-native";

import Colors from "styles/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  send: {
    backgroundColor: Colors.light.primary
  },
  reset: {
    backgroundColor: Colors.light.lightGray
  },
  text: {
    color: Colors.light.secondary
  }
});

export default styles;
