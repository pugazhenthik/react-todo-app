import React from 'react';
import Important from './icons/Important';
import Archive from './icons/Archive';
import Check from './icons/Check';
import Scheduled from './icons/Scheduled';

function TodoList({ todos, markImportant, markArchived, markCompleted }) {
  return (
    <div className="my-4 h-4/5 overflow-scroll">
      {todos.map((todo, i) => (
        <div
          key={todo.id}
          className="p-4 my-4 rounded-md bg-white hover:shadow-blue-100 hover:shadow-lg"
        >
          <div className="flex text-slate-500">
            <div className="flex">
              <button
                onClick={() => markCompleted(todo.id)}
                className="items-center rounded-md"
              >
                {todo.isCompleted ? <Check></Check> : <Scheduled></Scheduled>}
              </button>
            </div>
            <div className="pl-4 flex-grow text-slate-700">{todo.todo}</div>
            <button
              onClick={() => markImportant(todo.id)}
              className="ml-2 h-8 hover:bg-slate-200 p-1 rounded-md"
            >
              <Important isImportant={todo.isImportant}></Important>
            </button>
            <button
              onClick={() => markArchived(todo.id)}
              className="ml-2 h-8 hover:bg-slate-200 p-1 rounded-md"
            >
              <Archive></Archive>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
