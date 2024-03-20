import { DefaultProps } from "@/types/type";
import { createSlice } from "@reduxjs/toolkit";

const initialState: DefaultProps["userProps"] = {
  user: null,
  isLoggedIn: false,
  selectedUser: {
    id: "",
    firstName: "",
    lastName: "",
    title: "",
  },
  searchUser: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserData(state, action) {
      state.user = action.payload;
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    updateSelectedUser(state, action) {
      state.selectedUser = action.payload;
    },
    usersFilter(state, action) {
      state.searchUser = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { updateUserData, updateSelectedUser, usersFilter } =
  userSlice.actions;
