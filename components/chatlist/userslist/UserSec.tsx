import { UsersListProps } from "@/app/(tabs)/stack";
import { theme, tintColorDark, tintColorLight } from "@/constants/Colors";
import { useTheme } from "@react-navigation/native";
import { router } from "expo-router";
import React, { useCallback, useRef } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SwiperView from "../swipableRow";
import AndDesignIcon from "@/components/icons/AntDesignIcon";
import { useSelector } from "@/store";
import { searchTxt } from "@/util";

const UserSec = ({
  userData,
  userList,
  setUserList,
  setFilteredUsersList,
}: {
  userData: UsersListProps;
  userList: UsersListProps[];
  setUserList: (userList: UsersListProps[]) => void;
  setFilteredUsersList: (userList: UsersListProps[]) => void;
}) => {
  const { dark } = useTheme();
  const { searchUser } = useSelector((state) => state.userReducer);

  const handleArchive = (key: "archive" | "pinned") => {
    const updatedUser = [
      { ...userData, [key]: !userData[key] },
      ...userList.filter((usr) => usr.id !== userData.id),
    ];
    setUserList(updatedUser);
    setFilteredUsersList(
      updatedUser.filter((usr) =>
        searchTxt(usr.firstName).includes(searchTxt(searchUser))
      )
    );
  };

  const handleRead = (subKey: string) => {
    const updatedUser = [
      ...userList.map((usr) => {
        if (usr.id === userData.id) {
          return {
            ...usr,
            unReadCount: -1,
            readMessage: subKey === "Read" ? true : false,
          };
        } else return usr;
      }),
    ];
    setUserList([...updatedUser]);
    setFilteredUsersList([
      ...updatedUser.filter((usr) =>
        searchTxt(usr.firstName).includes(searchTxt(searchUser))
      ),
    ]);
  };

  const handleUpdateUserStatus = (
    key: "archive" | "pinned" | "readMessage",
    subKey?: string
  ) => {
    if (key === "archive" || key === "pinned") {
      handleArchive(key);
    } else {
      subKey && handleRead(subKey);
    }
  };
  return (
    <SwiperView
      handleUpdateUserStatus={handleUpdateUserStatus}
      userData={userData}
    >
      <TouchableOpacity
        style={{ ...styles.container }}
        onPress={() => router.push(`/(auth)/user/${userData.id}`)}
      >
        <Image
          source={require("../../../assets/images/defaultProfile.jpg")}
          style={{ ...styles.profileImage, marginVertical: 10 }}
        />
        <View
          style={{
            width: "80%",
            borderBottomColor: "gray",
            borderTopColor: "gray",
            borderBottomWidth: 0.5,
          }}
        >
          <View style={styles.listHeaderView}>
            <Text
              style={{
                color: dark ? "#FFFF" : theme.light.text,
                fontWeight: "500",
                marginVertical: 10,
              }}
            >
              {userData.firstName}
            </Text>
            <Text
              style={{
                color: dark ? tintColorLight : theme.light.text,
              }}
            >
              10: 40 PM
            </Text>
          </View>
          <View style={styles.listHeaderView}>
            <Text style={{ color: "gray" }}>How are you</Text>
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              {userData.pinned && (
                <AndDesignIcon color="gray" name="pushpino" size={17} />
              )}
              <>
                {!userData.readMessage && userData.unReadCount !== 0 && (
                  <View style={styles.badge}>
                    <Text style={{ color: "#FFFF", fontWeight: "500" }}>
                      {userData.unReadCount > 0 && userData.unReadCount}
                    </Text>
                  </View>
                )}
              </>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </SwiperView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: "row",
    gap: 10,
    width: "100%",
  },
  profileImage: {
    width: 50,
    height: 50,
    aspectRatio: 1,
    borderRadius: 50,
  },
  listHeaderView: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  badge: {
    backgroundColor: tintColorLight,
    padding: 3,
    borderRadius: 50,
    paddingHorizontal: 7,
    aspectRatio: 1,
    width: 25,
    justifyContent: "center",
    alignItems: "center",
    objectFit: "contain",
    marginLeft: 10,
  },
});

export default UserSec;
