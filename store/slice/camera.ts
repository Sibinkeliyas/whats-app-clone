import { DefaultProps } from "@/types/type";
import { createSlice } from "@reduxjs/toolkit";
import { FlashMode } from "expo-camera";

const initialState: DefaultProps["cameraSettingsProps"] = {
  flashMode: FlashMode.off,
  selectedImage: "",
  saveImageStatus: false,
  saveOption: null,
};

const camera = createSlice({
  name: "camera",
  initialState,
  reducers: {
    setFlashMode(state, action) {
      state.flashMode = action.payload;
    },
    updateSelectedImage(state, action) {
      state.selectedImage = action.payload;
    },
    saveImage(state, action) {
      state.saveImageStatus = action.payload;
    },
    changeSaveOption(state, action) {
      state.saveOption = action.payload;
    },
  },
});

export default camera.reducer;

export const { setFlashMode, updateSelectedImage, saveImage, changeSaveOption } = camera.actions;
