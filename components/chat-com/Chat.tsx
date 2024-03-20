import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import data from "./data.json";
import { defaultMessageColor, theme, tintColorLight } from "@/constants/Colors";
import { useSelector } from "@/store";
import { useScrollToTop } from "@react-navigation/native";
import { IUserChatProps } from ".";

const MessageBox = ({
  message,
  author,
  time,
  image,
}: {
  message?: string;
  author: string;
  time: string;
  image?: string;
}) => {
  const { dark } = useSelector((state) => state.themeReducer);
  return (
    <View
      style={{
        ...styles.messageView,
        backgroundColor:
          author === "me"
            ? defaultMessageColor
            : dark
            ? "#202c33"
            : theme.light.background,
        alignSelf: author === "me" ? "flex-end" : "flex-start",
      }}
    >
      {message && (
        <Text
          style={{
            ...styles.message,
            color:
              author === "me" ? "#FFFF" : dark ? "#FFF" : theme.dark.background,
          }}
        >
          {message}
        </Text>
      )}
      {image && <Image source={{ uri: image }} style={styles.msgImg} />}
      <Text style={styles.time}>
        {new Date(time).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </Text>
    </View>
  );
};

const Chat = ({ userChat }: { userChat: IUserChatProps[] }) => {
  return (
    <View style={{ height: "100%" }}>
      <FlatList
        scrollEnabled
        data={userChat}
        renderItem={({ item, index }) => (
          <MessageBox
            author={item.author}
            message={item.message}
            key={index}
            time={item.time}
            image={item.image}
          />
        )}
        keyExtractor={(_, index) => `${index}`}
        contentContainerStyle={{
          gap: 10,
          padding: 10,
          paddingBottom: 100,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  messageView: {
    maxWidth: "80%",
    padding: 10,
    height: "auto",
    borderRadius: 15,
  },
  message: {
    color: "#FFF",
    fontWeight: "500",
    margin : 5
  },
  time: {
    color: "#667781",
    fontWeight: "300",
    marginTop: 5,
    textAlign: "right",
    fontSize: 12,
  },
  msgImg: {
    width: "100%",
    objectFit: "cover",
    aspectRatio: 1,
    borderRadius: 8,
  },
});

export default Chat;
