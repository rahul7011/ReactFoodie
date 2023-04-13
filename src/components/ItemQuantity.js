import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
const ItemQuantity = ({ obj }) => {
  const dispatch = useDispatch();
  const addFoodItem = (obj) => {
    dispatch(addItem(obj));
  };
  const remFoodItem = (obj) => {
    dispatch(removeItem(obj));
  };
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div class="flex items-center justify-center border border-gray-100 my-3">
      <button
        class="text-orange-500 font-bold text-lg rounded-none "
        onClick={() => remFoodItem(obj)}
      >
        -
      </button>
      <p class="text-gray-900 text-sm mx-6">
        {(() => {
          const idx = cartItems.findIndex((item) => item.id === obj.id);
          return idx === -1 ? "0" : cartItems[idx].quantity;
        })()}
      </p>
      <button
        class="text-green-600 font-bold text-lg rounded-none "
        onClick={() => addFoodItem(obj)}
      >
        +
      </button>
    </div>
  );
};

export default ItemQuantity;
