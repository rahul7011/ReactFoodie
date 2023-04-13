import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import userSlice from "./userSlice";

//This is the Redux Store
const Store = configureStore({
  //It will contain slices
  reducer: {
    //nameOfOurSlice:slice
    cart: cartSlice,
    user: userSlice,
  },
});
export default Store;
