import Button from "@/components/common/button";
import { theme } from "@/constants/Colors";
import { WelcomePageConstants } from "@/constants/constants";
import useAuth from "@/hooks/useAuth";
import { useDispatch, useSelector } from "@/store";
import { changeThemeState } from "@/store/slice/theme";
import { Link, router } from "expo-router";
import React from "react";

import {
  Image,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Page = () => {
  const { dark } = useSelector((state) => state.themeReducer);
  const { isLoggedIn } = useAuth();
  const welcomeImage = dark
    ? require("@/assets/images/welcomeDark.jpg")
    : require("@/assets/images/welcome.png");
  return (
    <View style={styles.container}>
      <Image source={welcomeImage} style={styles.welcomeImage} />
      <View>
        <Text
          style={{
            ...styles.welcomeTitle,
            color: dark ? theme.dark.text : theme.light.text,
          }}
        >
          {WelcomePageConstants.TITLE}
        </Text>
        <Text
          style={{
            ...styles.welcomeDes,
            color: dark ? theme.dark.text : theme.light.text,
          }}
        >
          {WelcomePageConstants.TITLE_DES}
        </Text>
        <Button
          onPress={() =>
            router.push(isLoggedIn ? "/(tabs)" : "/(un_auth)/signIn")
          }
          title={WelcomePageConstants.TITLE_BTN_TXT}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeImage: {
    width: "100%",
    height: "35%",
    aspectRatio: 1,
  },
  welcomeTitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 20,
  },
  welcomeDes: {
    marginBottom: 10,
    fontWeight: "400",
    fontSize: 14,
  },
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

export default Page;
