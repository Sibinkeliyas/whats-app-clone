import { UsersListProps } from "@/app/(tabs)";
import { theme, tintColorDark, tintColorLight } from "@/constants/Colors";
import { useTheme } from "@react-navigation/native";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const UserSec = ({ userData }: { userData: UsersListProps }) => {
  const { dark } = useTheme();
  return (
    <TouchableOpacity style={{ ...styles.container }} onPress={() => router.push(`/(auth)/user/${userData.id}`)}>
      <Image
        source={require("../../../assets/images/defaultProfile.jpg")}
        style={styles.profileImage}
      />
      <View
        style={{
          width: "80%",
          borderBottomColor: "gray",
          borderTopColor: "gray",
          borderBottomWidth: .5,
        }}
      >
        <View style={styles.listHeaderView}>
          <Text
            style={{
              color: dark ? "#FFFF" : theme.light.text,
              fontWeight: "500",
            }}
          >
            {userData.firstName}
          </Text>
          <Text style={{ color: dark ? tintColorLight : theme.light.text }}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
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
