import React from "react";
import AddTodo from "./AddTodo";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";

function Todo() {
  const tasks = [
    {
      id: 1,
      todo: "Do something nice for someone I care about",
      isCompleted: true,
      isImportant: false,
      isArchived: false,
      tags: ["shopping"],
      userId: 26,
    },
    {
      id: 2,
      todo: "Contribute code or a monetary donation to an open-source software project Memorize the fifty states and their capitals",
      isCompleted: false,
      isImportant: true,
      isArchived: false,
      tags: ["shopping"],
      userId: 48,
    },
    {
      id: 3,
      todo: "Watch a classic movie",
      isCompleted: false,
      isImportant: false,
      isArchived: false,
      tags: ["finance"],
      userId: 4,
    },
    {
      id: 4,
      todo: "Contribute code or a monetary donation to an open-source software project ",
      isCompleted: true,
      isImportant: true,
      isArchived: true,
      userId: 48,
    },
    {
      id: 5,
      todo: "Solve a Rubik's cube",
      isCompleted: false,
      isImportant: false,
      isArchived: false,
      userId: 31,
    },
  ];
  return (
    <div class="flex max-w-5xl bg-blue-50 p-4 h-screen mx-auto">
      <div class="flex-grow relative p-4">
        <TodoFilter></TodoFilter>
        <TodoList tasks={tasks}></TodoList>
        <AddTodo></AddTodo>
      </div>
    </div>
  );
}

export default Todo;
