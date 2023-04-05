import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

//This is the Redux Store
const Store = configureStore({
  //It will contain slices
  reducer: {
    //nameOfOurSlice:slice
    cart: cartSlice,
  },
});
export default Store;
