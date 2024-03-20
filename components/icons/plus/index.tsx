import React from "react";
import Icon from "..";
import { theme } from "@/constants/Colors";
import { useTheme } from "@react-navigation/native";

const PlusIcon = () => {
  const { dark } = useTheme();
  return (
    <Icon
      color={dark ? theme.dark.text : theme.light.secondaryColor}
      name="plus"
      size={14}
    />
  );
};

export default PlusIcon;
