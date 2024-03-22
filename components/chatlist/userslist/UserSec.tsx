import { UsersListProps } from "@/app/(tabs)/stack";
import { theme, tintColorDark, tintColorLight } from "@/constants/Colors";
import { useTheme } from "@react-navigation/native";
import { router } from "expo-router";
import React, { useCallback, useRef } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppleStyleSwipeableRow from "../swipableRow";
import SwiperView from "../swipableRow";

const UserSec = ({ userData }: { userData: UsersListProps }) => {
  const { dark } = useTheme();
  return (
    <SwiperView>
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
            <View style={styles.badge}>
              <Text style={{ color: "#FFFF", fontWeight: "500" }}>5</Text>
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
  },
});

export default UserSec;
