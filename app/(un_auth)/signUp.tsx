import Button from "@/components/common/button";
import { theme } from "@/constants/Colors";
import { LoginPageConstants } from "@/constants/constants";
import useAuth from "@/hooks/useAuth";
import { useSelector } from "@/store";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const Page = () => {
  const { userLogin } = useAuth();
  const { dark } = useSelector((state) => state.themeReducer);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const alert = () =>
    Alert.alert("Success", "You have Loggined succesfully", [
      { text: "OK", onPress: () => router.push("/(tabs)/stack/") },
    ]);

  const onSubmit = async () => {
    const result = await userLogin(email, password);
    if (result) alert();
  };
  return (
    // <KeyboardAvoidingView style={styles.container}>
    <ScrollView automaticallyAdjustKeyboardInsets style={styles.container}>
      <Image
        source={require("@/assets/images/logo_transparent.png")}
        style={styles.img}
      />
      <Text
        style={{
          ...styles.title,
          color: dark ? theme.dark.text : theme.light.text,
        }}
      >
        {LoginPageConstants.TITLE}
      </Text>
      <View style={styles.inpuutFormView}>
        <View
          style={{
            ...styles.inputFieldView,
            backgroundColor: dark
              ? theme.dark.textFieldBgColor
              : theme.light.textFieldBgColor,
          }}
        >
          <TextInput
            placeholderTextColor={"gray"}
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
            style={{
              color: dark ? theme.dark.inputText : theme.light.inputText,
            }}
          />
        </View>
        <View
          style={{
            ...styles.inputFieldView,
            backgroundColor: dark
              ? theme.dark.textFieldBgColor
              : theme.light.textFieldBgColor,
          }}
        >
          <TextInput
            placeholderTextColor={"gray"}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            style={{
              color: dark ? theme.dark.inputText : theme.light.inputText,
            }}
          />
        </View>
        <View
          style={{
            ...styles.inputFieldView,
            backgroundColor: dark
              ? theme.dark.textFieldBgColor
              : theme.light.textFieldBgColor,
          }}
        >
          <TextInput
            placeholderTextColor={"gray"}
            placeholder="Enter your Password"
            value={password}
            onChangeText={setPassword}
            style={{
              color: dark ? theme.dark.inputText : theme.light.inputText,
            }}
          />
        </View>
        <Text
          style={{
            ...styles.text,
            color: dark ? theme.dark.inputText : theme.light.inputText,
          }}
          onPress={() => router.push("/(un_auth)/signIn")}
        >
          {LoginPageConstants.HAVE_ACCOUNT}
        </Text>
        <View style={{ justifyContent: "flex-end", height: "33%" }}>
          <Button
            onPress={onSubmit}
            buttonStyle={{ maringBotton: "auto" }}
            title={LoginPageConstants.BUTTON_TITLE}
          />
        </View>
      </View>
    </ScrollView>
    // </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingTop: 70,
    paddingHorizontal: 10,
  },
  img: {
    width: "90%",
    height: "35%",
    aspectRatio: 1,
    alignSelf: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  inpuutFormView: {
    paddingHorizontal: 20,
    width: "100%",
    marginVertical: 30,
  },
  inputFieldView: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    marginTop: 5,
  },
});
export default Page;
