import { StyleSheet } from "react-native";
import { theme } from "./Colors";

export const styles = StyleSheet.create({
  welcomeBtn: {
    alignSelf: "center",
    backgroundColor: theme.light.buttonBackground,
    paddingVertical: 15,
    paddingHorizontal: "20%",
    borderRadius: 10,
    marginVertical: 10,
  },
  welcomeBtnTxt: { fontWeight: "600" },
});