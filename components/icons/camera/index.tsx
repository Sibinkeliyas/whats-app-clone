import React from "react";
import { View } from "react-native";
import Icon from "..";
import useTheme from "@/hooks/useTheme";
import { theme } from "@/constants/Colors";

const CameraIcon = () => {
  const { dark } = useTheme();
  return <Icon name="camera" color={theme.light.secondaryColor} size={22} />;
};

export default CameraIcon;
