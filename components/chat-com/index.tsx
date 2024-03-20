import React, { useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import BottomeTab from "./BottomeTab";
import DismissKeyboard from "../common/dismisKeyboard";
import { useSelector } from "@/store";
import Chat from "./Chat";

const ChatCom = () => {
  const [text, setText] = useState("");
  const { dark } = useSelector((state) => state.themeReducer);
  const image = dark
    ? require("@/assets/images/darkBg.jpg")
    : require("@/assets/images/lightBg.jpg");
  return (
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={image} resizeMode="cover">
          <Chat />
          <BottomeTab text={text} setText={setText} />
        </ImageBackground>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});

export default ChatCom;
