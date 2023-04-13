import React from "react";
import Important from "./icons/Important";
import Archive from "./icons/Archive";

function TodoList({ tasks }) {
  return (
    <div className="my-4 h-4/5 overflow-scroll">
      {tasks.map((task) => (
        <div className="p-4 my-4 rounded-md bg-white hover:shadow-blue-100 hover:shadow-lg">
          <div className="flex">
            <div className="items-start">
              <input type="checkbox" />
            </div>
            <div className="pl-4 flex-grow">{task.todo}</div>
            <Important></Important>
            <Archive></Archive>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
