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
    height: "36%",
    width: "100%",
    backgroundColor: Colors.light.white,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0
  },
  header: {
    height: 50,
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: 20,
    borderColor: Colors.light.gray,
    borderBottomWidth: 1
  },
  body: {
    flex: 1,
    alignItems: "center"
  },
  textContainer: {
    borderBottomColor: Colors.light.gray,
    borderBottomWidth: 1,
    paddingVertical: 28,
    width: "100%",
    marginBottom: 12
  },
  text: {
    color: Colors.light.secondary,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center"
  },
  buttonsContainer: {
    marginTop: 12,
    marginBottom: 28,
    paddingHorizontal: 16,
    width: "100%"
  },
  separator: {
    height: 12
  },
  confirmButton: {
    backgroundColor: Colors.light.primary
  },
  cancelButton: {
    backgroundColor: Colors.light.lightGray
  },
  buttonText: {
    fontWeight: "600",
    color: Colors.light.secondary
  },
  hitSlop: {
    top: 20,
    left: 20,
    bottom: 20,
    right: 20
  }
});

export default styles;
