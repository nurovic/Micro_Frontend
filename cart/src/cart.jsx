import React from "react";
import { useStore } from "store/store";

function cart() {
  const { increment } = useStore();

  return (
    <div className="w-64 h-72 bg-yellow-100 border-4 rounded-[15px] rounded-12 ">
      <div className="font-2xl">Product</div>
      <button
        onClick={increment}
        className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"
      >
        Add Order
      </button>
    </div>
  );
}

export default cart;
