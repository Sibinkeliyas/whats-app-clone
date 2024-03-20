import React from "react";
import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";
import ThemeSwitch from "@/components/themeSwith";
import Icon from "@/components/icons";
import Camera from "@/components/headerComponents/headerCamera";
import Plus from "@/components/plus";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerRight: () => (
            <View style={styles.mainHeaderView}>
              <Camera />
              <Plus />
              <ThemeSwitch />
            </View>
          ),
          headerTitle: "",
          headerBackgroundContainerStyle: {
            backgroundColor: "trasparent",
          },
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "transparent",
          },
          tabBarIcon: ({ color }) => (
            <Icon name="wechat" color={color} size={25} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <Icon name="code" color={color} size={25} />
          ),
        }}
      />
    </Tabs>
  );
}
const styles = StyleSheet.create({
  mainHeaderView: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
});
