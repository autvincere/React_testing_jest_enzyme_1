import React, { useState } from "react";

const useTodos = () => {
  const [todos, setTodos] = useState([
    {
      text: "Todo 1",
      isCompleted: false,
    },
    {
      text: "Todo 2",
      isCompleted: false,
    },
    {
      text: "Todo 3",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [{ text, isCompleted: false }, ...todos];
    setTodos(newTodos);
  };

  const completeTodo = (i) => {
    todos[i].isCompleted = !todos[i].isCompleted;
    const selection = todos.splice(i, 1);
    const newArr = [...todos, ...selection];

    setTodos(newArr);
  };

  const removeTodo = (i) => {
    const newTodos = [...todos];
    newTodos.splice(i, 1);
    setTodos(newTodos);
  };

  return {
    todos,
    addTodo,
    completeTodo,
    removeTodo,
  };
};

export default useTodos;
