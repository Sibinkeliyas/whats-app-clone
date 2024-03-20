import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import BottomeTab from "./BottomeTab";
import DismissKeyboard from "../common/dismisKeyboard";
import { useSelector } from "@/store";
import Chat from "./Chat";
import data from "./data.json";

export interface IUserChatProps {
  id: number;
  author: string;
  time: string;
  message?: string;
  image?: string;
}

const ChatCom = () => {
  const [text, setText] = useState("");
  const { dark } = useSelector((state) => state.themeReducer);
  const { selectedImage } = useSelector((state) => state.cameraSettingsReducer);
  const [userChat, setUserChat] = useState<IUserChatProps[]>(data);

  const handleUpdateUserMsg = (
    image: string = "",
    message: string = "",
    author: string = 'me',
  ) => {
    setUserChat((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        author: author,
        image: image,
        message: message,
        time: `${new Date()}`,
      },
    ]);
  };

  useEffect(() => {
    if (selectedImage) {
      handleUpdateUserMsg(selectedImage)
    }
  }, [selectedImage]);

  const image = dark
    ? require("@/assets/images/darkBg.jpg")
    : require("@/assets/images/lightBg.jpg");
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={image} resizeMode="cover">
        <Chat userChat={userChat} />
        <BottomeTab
          text={text}
          setText={setText}
          handleUpdateMsg={handleUpdateUserMsg}
        />
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
