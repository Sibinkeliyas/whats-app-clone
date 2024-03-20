import { theme } from "@/constants/Colors";
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import Camera from "@/components/headerComponents/headerCamera";
import Plus from "@/components/plus";
import ThemeSwitch from "@/components/themeSwith";
import { useDispatch, useSelector } from "@/store";
import { usersFilter } from "@/store/slice/userProfile";

function TabStackLayout() {
  const dispatch = useDispatch();
  const { dark } = useSelector((state) => state.themeReducer);
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Settings",
          headerLargeTitle: true,
          headerShadowVisible: false,
          headerSearchBarOptions: {
            placeholder: "Search",
            barTintColor: dark
              ? theme.dark.textFieldBgColor
              : theme.light.textFieldBgColor,
            textColor: dark ? theme.dark.inputText : theme.light.inputText,
            hintTextColor: dark ? theme.dark.inputText : theme.light.inputText,
            tintColor: dark ? theme.dark.inputText : theme.light.inputText,
            onChangeText(e) {
              dispatch(usersFilter(e.nativeEvent.text));
            },
          },
          headerRight: () => (
            <View style={styles.mainHeaderView}>
              <Camera />
              <Plus />
              <ThemeSwitch />
            </View>
          ),
        }}
      />
    </Stack>
  );
}

export default TabStackLayout;

const styles = StyleSheet.create({
  mainHeaderView: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
});
