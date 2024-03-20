import { theme } from "@/constants/Colors";
import { UserChatConstants } from "@/constants/constants";
import { useSelector } from "@/store";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ChatHeader = () => {
  const { selectedUser } = useSelector((state) => state.userReducer);
  const { dark } = useSelector((state) => state.themeReducer);
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Text
        style={{
          ...styles.name,
          color: dark ? theme.dark.text : theme.light.text,
        }}
      >
        {selectedUser.firstName}
      </Text>
      <Text style={styles.moreInfo}>{UserChatConstants.headerMoreInfo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontWeight: "600",
    fontSize: 17,
  },
  moreInfo: {
    fontWeight: "300",
    color: "#667781",
    fontSize :12,
    marginVertical : 3
  },
});

export default ChatHeader;
