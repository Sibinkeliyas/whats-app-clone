import React, { useEffect, useRef, useState } from "react";
import { AutoFocus, Camera, CameraType, FlashMode } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "../icons";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { useDispatch, useSelector } from "@/store";
import { changeSaveOption, updateSelectedImage } from "@/store/slice/camera";
const CameraCom = () => {
  const dispatch = useDispatch();
  const { flashMode } = useSelector((state) => state.cameraSettingsReducer);
  const [hasCameraAccess, setHasCameraAccess] = useState<any>(null);
  const [image, setImage] = useState<any>(null);
  const [type, setType] = useState<any>("back");

  const cameraRef = useRef<any>(null);

  const pickImage = async () => {
    dispatch(changeSaveOption("media"));
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    dispatch(updateSelectedImage(result?.assets?.[0].uri || ""));
    setImage(result?.assets?.[0].uri || "");
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      dispatch(changeSaveOption("camera"));
      const data = await cameraRef.current.takePictureAsync();
      dispatch(updateSelectedImage(data.uri || ""));
      setImage(data.uri);
    }
  };

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraAccess(cameraStatus.status === "granted");
    })();
  }, []);

  useEffect(() => {
    if (image) {
      router.push("/capturedimage");
    }
  }, [image]);
  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        flashMode={flashMode}
        ref={cameraRef}
        focusable
        autoFocus={AutoFocus.singleShot}
      ></Camera>
      <View
        style={{
          position: "absolute",
          bottom: 15,
          justifyContent: "space-between",
          flexDirection: "row",
          width: "100%",
          paddingHorizontal: 25,
          paddingBottom: 25,
        }}
      >
        <TouchableOpacity
          onPress={pickImage}
          style={{
            height: 40,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Icon name="photo" size={28} color="#FFFF" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={takePicture}
          style={{
            height: 40,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Icon name="camera" size={28} color="#FFFF" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            setType((curr: any) => (curr === "back" ? "front" : "back"))
          }
          style={{
            height: 40,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Icon name="refresh" size={28} color="#FFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CameraCom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
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
