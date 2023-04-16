import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TodoFilter from './TodoFilter';
import TodoList from './TodoList';
import initialTodos from '../Data';

function Todo() {
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState('All');

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case 'Scheduled':
        return !todo.isCompleted && !todo.isArchived;
      case 'Important':
        return todo.isImportant && !todo.isArchived;
      case 'Completed':
        return todo.isCompleted && !todo.isArchived;
      case 'Archived':
        return todo.isArchived;
      default:
        return !todo.isArchived;
    }
  });

  const todosCount = todos.filter((todo) => {
    return !todo.isArchived;
  }).length;

  const todosScheduledCount = todos.filter((todo) => {
    return !todo.isCompleted && !todo.isArchived;
  }).length;

  const todosCompletedCount = todos.filter((todo) => {
    return todo.isCompleted && !todo.isArchived;
  }).length;

  const todosImportantCount = todos.filter((todo) => {
    return todo.isImportant && !todo.isArchived;
  }).length;

  const todosArchivedCount = todos.filter((todo) => {
    return todo.isArchived;
  }).length;

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

  const markToggle = (id, type) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => id === todo.id);
    newTodos[index][type] = !newTodos[index][type];
    setTodos(newTodos);
  };

  return (
    <div className="flex max-w-5xl bg-blue-50 p-4 h-screen mx-auto">
      <div className="flex-grow relative p-4">
        <TodoFilter
          filter={filter}
          setFilter={setFilter}
          todosCount={todosCount}
          todosScheduledCount={todosScheduledCount}
          todosCompletedCount={todosCompletedCount}
          todosImportantCount={todosImportantCount}
          todosArchivedCount={todosArchivedCount}
        ></TodoFilter>
        <TodoList todos={filteredTodos} markToggle={markToggle}></TodoList>
        <AddTodo addTodo={addTodo}></AddTodo>
      </div>
    </div>
  );
}

export default Todo;
