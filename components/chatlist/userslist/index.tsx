import { UsersListProps } from "@/app/(tabs)/stack";
import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import UserSec from "./UserSec";
import useTheme from "@/hooks/useTheme";
import { theme, tintColorLight } from "@/constants/Colors";
import Icon from "@/components/icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const UsersList = ({ usersList }: { usersList: UsersListProps[] }) => {
  const { dark } = useTheme();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FlatList
        data={usersList}
        scrollEnabled
        contentInsetAdjustmentBehavior="automatic"
        renderItem={({ item, index }) => (
          <UserSec userData={item} key={index} />
        )}
      />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginVertical: 5,
    width: "100%",
  },
  filterContainer: {
    flexDirection: "row",
    width: "100%",
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  listText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  inputFieldView: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    width: "83%",
    marginVertical: 10,
  },
});

export default UsersList;
