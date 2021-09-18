import React from "react";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import useTodos from "../src/custom-hooks/useTodos";
import "./App.css";

const App = () => {
  const { addTodo, completeTodo, removeTodo, todos } = useTodos();

  return (
    <div className="app">
      <div className="todo-list">
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, i) => (
          <Todo
            key={i}
            i={i}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
