import { useContext } from "react";
import themeContext from "@/context/ThemeContext";

const useTheme = () => {
  const context = useContext(themeContext);

  if (!context) throw new Error("Context must be wrapped");
  return context;
};

export default useTheme;
