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
    // se hace necesaria la inclusion de un identificador por id dentro del objeto, para poder usar metodos que no muten el array
    const selection = todos.find(item => )
    console.log(selection);
    //let value = todos[i]?.isCompleted

    // if (!value) {
    //   value = true;
    //   const selection = todos.splice(i, 1)
    //   //const changed = todos[i];
    //  const newArr = [...todos, {text,value}];
    //   setTodos(newArr);
    //   console.log(todos[i]);
    // } else {
    //   value = false;
    //   // todos[i].isCompleted = false;
    //   // const changed = todos[i];
    //   // const newArr = [...selection, ...todos];
    //   // setTodos(newArr);
    //   console.log(todos[i]);
    // }

    //todos[i].isCompleted = !todos[i].isCompleted;

    // const selection = todos.splice(i, 1)
    // const newArr = [...todos,...selection]

    // if (todos[i].isCompleted) {
    //   // todos[i].isCompleted = false;
    //   // const selection = todos.splice(i, 1);
    //   // const newArr = [...selection, ...todos];
    //   // setTodos(newArr);
    //   console.log('esta en true');
    // } else {
    //   console.log('esta en false');
    // }

    // if (todos[i].isCompleted === false) {
    //   // todos[i].isCompleted = true;
    //   // const selection = todos.splice(i, 1);
    //   //  const newArr = [...todos, ...selection];
    //   //  setTodos(newArr);
    //   console.log('esta en false');
    // }

    // setTodos(newArr);
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
