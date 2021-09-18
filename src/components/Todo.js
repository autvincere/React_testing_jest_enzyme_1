import React from 'react'

const Todo = ({ todo, i, completeTodo, removeTodo }) => {
     return (
          <div
          className="todo"
          style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
          {todo.text}
    
          <div>
            <button onClick={() => completeTodo(i)}>Complete</button>
            <button onClick={() => removeTodo(i)}>X</button>
          </div>
        </div>
     )
}

export default Todo
