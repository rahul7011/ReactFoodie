import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === newItem.id);
      if (itemIndex === -1) {
        // item doesn't exist in cart, add it with quantity 1
        state.items.push({ ...newItem, quantity: 1 });
      } else {
        // item already exists in cart, increment quantity
        state.items[itemIndex].quantity++;
      }
    },
    removeItem: (state, action) => {
      const remItem = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === remItem.id);
      if (itemIndex !== -1) {
        // item exist in cart
        if (state.items[itemIndex].quantity !== 1) {
          state.items[itemIndex].quantity--;
        } else {
          state.items.splice(itemIndex, 1);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

//This will export all our actions
export const { addItem, removeItem, clearCart } = cartSlice.actions;

//This will combine all the reducers into a single reducer and then export it
export default cartSlice.reducer;
