import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    //Initial value of this slice(Cart)
    items: [],
  },
  reducers: {
    //What dispatch actions will call what reducer functions,kind of like a mapping
    addItem: (state, action) => {
      //state is the initialState of this slice
      //action is the data that is coming in

      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const index = state.items.indexOf(action.payload);
      if (index > -1) {
        // only splice array when item is found
        state.items.splice(index, 1); // 2nd parameter means remove one item only
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
