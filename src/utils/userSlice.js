import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    detail: {
      name: "",
      email: "",
      password: "",
    },
  },
  reducers: {
    loginUser: (state, action) => {
      const { name, email, password } = action.payload;
      state.detail.name = name;
      state.detail.email = email;
      state.detail.password = password;
    },
    logoutUser: (state) => {
      state.detail = {};
    },
  },
});

export const {loginUser,logoutUser}=userSlice.actions;
export default userSlice.reducer;