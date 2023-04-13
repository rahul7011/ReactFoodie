import React from "react";

const ItemQuantity = () => {
  return (
    <div class="flex items-center justify-center border border-gray-100 my-3 rounded-lg shadow-sm">
      <button class="text-orange-500 font-bold text-lg rounded-none ">
        -
      </button>
      <p class="text-gray-900 text-sm mx-6">1</p>
      <button class="text-green-600 font-bold text-lg rounded-none ">
        +
      </button>
    </div>
  );
};

export default ItemQuantity;
