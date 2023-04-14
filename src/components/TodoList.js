import React from 'react';
import Important from './icons/Important';
import Archive from './icons/Archive';

function TodoList({ todos, markImportant, markArchived, markCompleted }) {
  console.log('toto listing');
  return (
    <div className="my-4 h-4/5 overflow-scroll">
      {todos.map((todo, i) => (
        <div
          key={todo.id}
          className="p-4 my-4 rounded-md bg-white hover:shadow-blue-100 hover:shadow-lg"
        >
          <div className="flex">
            <div className="items-start">
              <input type="checkbox" />
            </div>
            <div className="pl-4 flex-grow">{todo.todo}</div>
            <button
              onClick={() => markImportant(i)}
              className="ml-2 h-8 hover:bg-slate-200 p-1 rounded-md"
            >
              <Important isImportant={todo.isImportant}></Important>
            </button>
            <button
              onClick={() => markArchived(i)}
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
