import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "@/constants/style";
import { useSelector } from "@/store";
import { theme } from "@/constants/Colors";
import { WelcomePageConstants } from "@/constants/constants";

const Button = ({ onPress, title ,buttonStyle}: { onPress: () => void; title: string, buttonStyle?:Object }) => {
  const { dark } = useSelector((state) => state.themeReducer);
  return (
    <TouchableOpacity
      style={{ ...styles.welcomeBtn, ...buttonStyle }}
      onPress={onPress}
    >
      <Text
        style={{
          ...styles.welcomeBtnTxt,
          color: dark ? theme.light.text : theme.dark.text,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
