import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import PlusIcon from "../icons/plus";
import useTheme from "@/hooks/useTheme";
import { theme } from "@/constants/Colors";
import { router } from "expo-router";

const Plus = () => {
  const { dark } = useTheme();
  return (
    <TouchableOpacity
    onPress={() => router.push('/newChat')}
      style={{
        ...styles.container,
        backgroundColor: dark
          ? theme.dark.secondaryBackgroundColor
          : theme.light.background,
      }}
    >
      <PlusIcon />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 6,
    borderCurve: "circular",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    
  },
});

export default Plus;
