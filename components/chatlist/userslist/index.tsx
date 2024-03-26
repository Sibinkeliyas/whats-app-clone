import { UsersListProps } from "@/app/(tabs)/stack";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import UserSec from "./UserSec";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const UsersList = ({
  usersList,
  filteredData,
  setUsersList,
  setFilteredUsersList,
}: {
  usersList: UsersListProps[];
  filteredData: UsersListProps[];
  setUsersList: (userList: UsersListProps[]) => void;
  setFilteredUsersList: (userList: UsersListProps[]) => void;
}) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FlatList
        data={filteredData}
        scrollEnabled
        contentInsetAdjustmentBehavior="automatic"
        renderItem={({ item, index }) =>
          !item.archive ? (
            <UserSec
              userData={item}
              key={index}
              setUserList={setUsersList}
              userList={usersList}
              setFilteredUsersList={setFilteredUsersList}
            />
          ) : null
        }
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
