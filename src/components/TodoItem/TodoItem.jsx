import "./style.scss";

// * React
import React from "react";

function TodoItem({ todo, toggleTodo, removeTodo }) {

  const { id, text, completed } = todo;

  return (
    <li
      className={`todo-item ${completed ? "completed" : ""}`}
      onClick={() => toggleTodo(id)}
    >
      <span>{text}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          removeTodo(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;