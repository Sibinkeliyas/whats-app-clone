import SelectedImageComp from "@/components/selectedImage";
import { useSelector } from "@/store";
import { router } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";

const Page = () => {
  const { selectedImage } = useSelector((state) => state.cameraSettingsReducer);
  useEffect(() => {
    if (!selectedImage) router.back();
  }, []);
  return (
    <View style={styles.container}>
      <SelectedImageComp />
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});
