import React from "react";

function FilterButton({ text, count, isActive }) {
  return (
    <button
      className={
        "py-1 px-2 rounded-md border-2 border-blue-300 text-sm text-gray-800 mr-2 hover:bg-blue-300 hover:border-blue-400 " +
        (isActive ? "bg-blue-300" : "bg-blue-100")
      }
    >
      {text} ({count}) {isActive}
    </button>
  );
}

export default FilterButton;
