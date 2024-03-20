import { useDispatch, useSelector } from "@/store";
import { changeThemeState } from "@/store/slice/theme";
import { ThemeContextType, ThemeType } from "@/types/type";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect } from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as ReactThemeProvider,
} from "@react-navigation/native";

export const initialState: ThemeType = {
  theme: "light",
  dark: false,
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const setSession = async (key: string, value: string | null) => {
  if (key && value) {
    await AsyncStorage.setItem(key, value);
  } else {
    await AsyncStorage.removeItem(key);
  }
};

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const dispatch = useDispatch();
  const { dark, theme } = useSelector((state) => state.themeReducer);
  const changeTheme = async (theme: "light" | "dark") => {
    await setSession("theme", theme);
    dispatch(changeThemeState({ theme, dark: !dark }));
  };

  useEffect(() => {
    const init = async () => {
      const selectedTheme = await AsyncStorage.getItem("theme");
      if (selectedTheme) {
        dispatch(
          changeThemeState({
            theme: selectedTheme,
            dark: selectedTheme === "dark",
          })
        );
      } else {
        await setSession("theme", "light");
      }
    };
    init();
  }, []);
  return (
    <ThemeContext.Provider value={{ dark:dark, theme, changeTheme }}>
      <ReactThemeProvider value={dark ? DarkTheme : DefaultTheme}>
        {children}
      </ReactThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
