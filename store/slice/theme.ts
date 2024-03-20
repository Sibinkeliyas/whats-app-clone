import { DefaultProps } from "@/types/type";
import { createSlice } from "@reduxjs/toolkit";

const initialState: DefaultProps["themeProps"] = {
  theme: "light",
  dark: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeThemeState(state, action) {
      state.theme = action.payload.theme;
      state.dark = action.payload.dark;
    },
  },
});

export default themeSlice.reducer;
export const { changeThemeState } = themeSlice.actions;
