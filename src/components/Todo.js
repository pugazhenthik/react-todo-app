import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TodoFilter from './TodoFilter';
import TodoList from './TodoList';

const initialTodos = [
  {
    id: 1,
    todo: 'Do something nice for someone I care about',
    isCompleted: true,
    isImportant: false,
    isArchived: false,
  },
  {
    id: 2,
    todo: 'Contribute code or a monetary donation to an open-source software project Memorize the fifty states and their capitals',
    isCompleted: false,
    isImportant: true,
    isArchived: false,
  },
  {
    id: 3,
    todo: 'Watch a classic movie',
    isCompleted: false,
    isImportant: false,
    isArchived: false,
  },
  {
    id: 4,
    todo: 'Contribute code or a monetary donation to an open-source software project ',
    isCompleted: true,
    isImportant: true,
    isArchived: true,
  },
  {
    id: 5,
    todo: "Solve a Rubik's cube",
    isCompleted: false,
    isImportant: false,
    isArchived: false,
  },
];

function Todo() {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (todo) => {
    const data = {
      id: todos.length + 1,
      todo: todo,
      isCompleted: false,
      isImportant: false,
      isArchived: false,
    };
    setTodos([...todos, data]);
  };

  const markImportant = (index) => {
    const newTodos = [...todos];
    newTodos[index].isImportant = !newTodos[index].isImportant;
    setTodos(newTodos);
  };

  const markCompleted = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const markArchived = (index) => {
    const newTodos = [...todos];
    newTodos[index].isArchived = !newTodos[index].isArchived;
    setTodos(newTodos);
  };

  return (
    <div className="flex max-w-5xl bg-blue-50 p-4 h-screen mx-auto">
      <div className="flex-grow relative p-4">
        <TodoFilter></TodoFilter>
        <TodoList
          todos={todos}
          markImportant={markImportant}
          markArchived={markArchived}
          markCompleted={markCompleted}
        ></TodoList>
        <AddTodo addTodo={addTodo}></AddTodo>
      </div>
    </div>
  );
}

export default Todo;
