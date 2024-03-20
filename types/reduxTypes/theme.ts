import { UsersListProps } from "@/app/(tabs)";
import { UserProps } from "../type";

export type themeInitialType = {
  theme: "light" | "dark";
  dark: boolean;
};

export type userInitialTypes = {
  user: UserProps | null;
  isLoggedIn: boolean;
  selectedUser : UsersListProps
};
