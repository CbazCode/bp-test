import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 40
  },
  id: {
    fontSize: 28,
    fontWeight: "bold"
  },
  extra: {
    fontSize: 14,
    fontWeight: "400"
  },
  content: {
    marginVertical: 56,
    paddingHorizontal: 16
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8
  },
  label: {
    fontSize: 14,
    fontWeight: "500"
  },
  value: {
    fontSize: 14
  },
  image: {
    width: 140,
    height: 140
  }
});

export default styles;
