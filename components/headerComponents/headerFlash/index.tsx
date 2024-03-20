import Flash from "@/components/icons/flash";
import { useDispatch, useSelector } from "@/store";
import { setFlashMode } from "@/store/slice/camera";
import { FlashMode } from "expo-camera";
import React from "react";
import { Pressable } from "react-native";

const HeaderFlash = () => {
  const dispatch = useDispatch();
  const { flashMode } = useSelector((state) => state.cameraSettingsReducer);
  const handleFlash = () => {
    dispatch(
      setFlashMode(
        flashMode === FlashMode.off
          ? FlashMode.on
          : flashMode === FlashMode.on
          ? FlashMode.auto
          : FlashMode.off
      )
    );
  };
  return (
    <Pressable onPress={handleFlash}>
      <Flash />
    </Pressable>
  );
};

export default HeaderFlash;
