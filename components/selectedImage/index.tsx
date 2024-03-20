import { useSelector } from "@/store";
import React from "react";
import { Image, StyleSheet } from "react-native";
import CapturedimageFooter from "../footerComponets/capturedImgFooter";

const SelectedImageComp = () => {
  const { selectedImage } = useSelector((state) => state.cameraSettingsReducer);

  return (
    <>
      <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
      <CapturedimageFooter />
    </>
  );
};

export default SelectedImageComp;

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    borderRadius: 20,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedImage: {
    width: "100%",
    aspectRatio: 1,
    objectFit: "cover",
  },
});
