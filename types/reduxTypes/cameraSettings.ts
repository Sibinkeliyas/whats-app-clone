import { FlashMode } from "expo-camera";

export type CamerSttingsProps = {
  flashMode: FlashMode;
  selectedImage: string;
  saveImageStatus: boolean;
  saveOption: "media" | "camera" | null;
};
