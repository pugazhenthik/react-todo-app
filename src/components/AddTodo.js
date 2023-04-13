import React from "react";

function AddTodo() {
  return (
    <div className="absolute bottom-4 w-full right-0">
      <div className="bg-blue-100 border-2 border-blue-100 rounded-md shadow-blue-200 shadow-lg p-4 mx-4">
        <form>
          <div className="flex">
            <input
              type="text"
              className="flex-grow px-4 py-1 border-1 border-blue-300 rounded-md focus:outline-none focus:ring focus:border-blue-200"
            />
            <button
              type="submit"
              className="ml-4 bg-blue-200 px-4 py-1 border-2 border-blue-300 text-blue-800 rounded-md hover:border-blue-400 hover:shadow-md hover:bg-blue-300"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTodo;
