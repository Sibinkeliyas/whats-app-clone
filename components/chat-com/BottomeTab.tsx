import { theme, tintColorLight } from "@/constants/Colors";
import { useDispatch, useSelector } from "@/store";
import React from "react";
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Icon from "../icons";
import AndDesignIcon from "../icons/AntDesignIcon";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { changeSaveOption, updateSelectedImage } from "@/store/slice/camera";

const BottomeTab = ({
  text,
  setText,
}: {
  text: string;
  setText: (text: string) => void;
}) => {
  const dispatch = useDispatch();
  const { dark } = useSelector((state) => state.themeReducer);

  const pickImage = async () => {
    dispatch(changeSaveOption("media"));
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result?.assets?.[0].uri);

    dispatch(updateSelectedImage(result?.assets?.[0].uri || ""));
  };
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={70}
      style={{
        flex: 1,
        position: "absolute",
        width: " 100%",
        bottom: 0,
      }}
    >
      <View
        style={{
          ...styles.container,
          backgroundColor: dark ? "#1B1C1E" : theme.light.background,
        }}
      >
        <TouchableOpacity style={{ paddingHorizontal: 10 }} onPress={pickImage}>
          <AndDesignIcon color={tintColorLight} name="plus" size={23} />
        </TouchableOpacity>
        <View
          style={{
            ...styles.inputFieldView,
            backgroundColor: dark
              ? theme.dark.textFieldBgColor
              : theme.light.textFieldBgColor,
            width: text ? "70%" : "60%",
          }}
        >
          <TextInput
            placeholderTextColor={"gray"}
            placeholder="Search"
            value={text}
            onChangeText={setText}
            style={{
              color: dark ? theme.dark.inputText : theme.light.inputText,
            }}
          />
        </View>
        {text ? (
          <TouchableOpacity
            style={{ paddingHorizontal: 10 }}
            onPress={() => setText("")}
          >
            <Icon name="send" color={tintColorLight} size={23} />
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity
              style={{ paddingHorizontal: 10 }}
              onPress={() => router.push("/camera")}
            >
              <Icon name="camera" color={tintColorLight} size={23} />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingHorizontal: 10 }}>
              <Icon name="microphone" color={tintColorLight} size={23} />
            </TouchableOpacity>
          </>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default BottomeTab;

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 10,
    elevation: 5,
    shadowColor: "#000",
    borderTopColor: "gray",
    borderWidth: 0.2,
    flexDirection: "row",
    gap: 5,
    paddingBottom: 15,
  },
  inputFieldView: {
    padding: 10,
    borderRadius: 30,
    width: "60%",
    marginVertical: 10,
    borderWidth: 0.2,
  },
});
