import React from "react";
import { Pressable, View } from "react-native";
import CameraIcon from "../../icons/camera";
import { router } from "expo-router";

const Camera = () => {
  const handleCameraOpen = () => router.push("/camera");
  return (
    <View
      style={{
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 15,
      }}
    >
      <Pressable onPress={handleCameraOpen}>
        <CameraIcon />
      </Pressable>
    </View>
  );
};

export default Camera;
