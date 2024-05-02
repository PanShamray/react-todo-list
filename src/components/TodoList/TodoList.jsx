
import "./style.scss";

// * React
import React from "react";

// * Components
import TodoItem from "../TodoItem";

function TodoList({todos, toggleTodo, removeTodo}) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;