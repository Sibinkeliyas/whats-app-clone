import { useDispatch, useSelector } from '@/store';
import { changeThemeState } from '@/store/slice/theme';
import React from 'react'
import { Switch, View } from 'react-native';

const ThemeSwitch = () => {
     const disptach = useDispatch();
     const { dark } = useSelector((state) => state.themeReducer);
     const toggleSwitch = () => {
       disptach(
         changeThemeState({ dark: !dark, theme: dark ? "light" : "dark" })
       );
     };
  return (
    <View
      style={{
        transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
        marginHorizontal: 10,
      }}
    >
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={dark ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={dark}
      />
    </View>
  );
}

export default ThemeSwitch