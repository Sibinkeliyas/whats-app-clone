import Icon from "@/components/icons";
import { theme } from "@/constants/Colors";
import { useSelector } from "@/store";
import { updateSelectedImage } from "@/store/slice/camera";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import * as MediaLibrary from "expo-media-library";

const CapturedimageFooter = () => {
  const { dark } = useSelector((state) => state.themeReducer);
  const { saveOption, selectedImage } = useSelector((state) => state.cameraSettingsReducer);

  const saveImage = async () => {
    if (selectedImage) {
      try {
        await MediaLibrary.createAssetAsync(selectedImage);
        updateSelectedImage(null);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          updateSelectedImage(null);
          router.push("/camera");
        }}
      >
        <Icon
          color={dark ? "#FFF" : theme.light.text}
          size={28}
          name="refresh"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          router.push("/(tabs)");
        }}
      >
        <Icon
          color={dark ? "#FFF" : theme.light.text}
          size={28}
          name="send"
        />
      </TouchableOpacity>
      {saveOption === "camera" && (
        <TouchableOpacity onPress={saveImage}>
          <Icon
            color={dark ? "#FFF" : theme.light.text}
            size={28}
            name="save"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CapturedimageFooter;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 10,
    paddingHorizontal: 50,
    paddingBottom: 25,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
});
