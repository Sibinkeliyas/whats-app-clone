import { CamerSttingsProps } from "./reduxTypes/cameraSettings";
import { userInitialTypes } from "./reduxTypes/theme";

export type ThemeType = {
  theme: "dark" | "light";
  dark: boolean;
};

export type ThemeContextType = {
  theme: "light" | "dark";
  dark: boolean;
  changeTheme: (selectedTheme: "light" | "dark") => Promise<void>;
};

export type DefaultProps = {
  themeProps: ThemeType;
  userProps: userInitialTypes;
  cameraSettingsProps: CamerSttingsProps;
};

export type UserProps = {
  id: number
  name: string;
  email: string;
  profile?: string;
  number?: string;
};

export type JwtProps = {
  user: UserProps | null;
  isLoggedIn: boolean;
};

export type JWtContextProps = {
  user: UserProps | null;
  isLoggedIn: boolean;
  userLogin: (email: string, password: string) => Promise<boolean>;
};
