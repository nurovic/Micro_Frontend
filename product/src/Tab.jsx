import React from "react";
import { StoreProvider, useStore } from "store/store";

function tab() {
  const { count, clear } = useStore();

  return (
    <div>
        ?
      {count}
      <button
        onClick={clear}
        className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"
      >
        Clear Cart
      </button>
    </div>
  );
}

export default tab;
