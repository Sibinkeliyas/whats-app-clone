import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import data from "./data.json";
import { defaultMessageColor, theme, tintColorLight } from "@/constants/Colors";
import { useSelector } from "@/store";

const MessageBox = ({
  message,
  author,
  time,
}: {
  message: string;
  author: string;
  time: string;
}) => {
  const { dark } = useSelector((state) => state.themeReducer);
  return (
    <View
      style={{
        ...styles.messageView,
        backgroundColor:
          author === "UserA"
            ? defaultMessageColor
            : dark
            ? "#202c33"
            : theme.light.background,
        alignSelf: author === "UserA" ? "flex-end" : "flex-start",
      }}
    >
      <Text
        style={{
          ...styles.message,
          color:
            author === "UserA"
              ? "#FFFF"
              : dark
              ? "#FFF"
              : theme.dark.background,
        }}
      >
        {message}
      </Text>
      <Text style={styles.time}>
        {new Date(time).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </Text>
    </View>
  );
};

const Chat = () => {
  return (
    <View style={{ height: "100%" }}>
      <FlatList
        scrollEnabled
        data={data}
        renderItem={({ item, index }) => (
          <MessageBox
            author={item.author}
            message={item.message}
            key={index}
            time={item.time}
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
    width: "100%",
    padding: 15,
    height: "auto",
    borderRadius: 15,
  },
  message: {
    color: "#FFF",
    fontWeight: "500",
  },
  time: {
    color: "#667781",
    fontWeight: "300",
    marginTop: 5,
    textAlign: "right",
    fontSize: 12,
  },
});

export default Chat;
