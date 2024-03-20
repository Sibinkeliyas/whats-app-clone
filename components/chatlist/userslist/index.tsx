import { UsersListProps } from "@/app/(tabs)";
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

const UsersList = ({
  usersList,
  search,
  setSearch
}: {
  usersList: UsersListProps[];
  search: string;
  setSearch: (search: string) => void;
}) => {
  const { dark } = useTheme();
  return (
    <FlatList
      data={usersList}
      scrollEnabled
      ListHeaderComponent={
        <View style={styles.listContainer}>
          <Text
            style={{
              ...styles.listText,
              color: dark ? theme.dark.text : theme.light.text,
            }}
          >
            Chat
          </Text>
          <View style={{ ...styles.filterContainer }}>
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
                placeholder="Search"
                value={search}
                onChangeText={setSearch}
                style={{
                  color: dark ? theme.dark.inputText : theme.light.inputText,
                }}
              />
            </View>
            <Pressable style={{ marginRight: 10 }}>
              <Icon color={tintColorLight} name="filter" size={25} />
            </Pressable>
          </View>
        </View>
      }
      renderItem={({ item, index }) => <UserSec userData={item} key={index} />}
    />
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
