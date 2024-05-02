import React from "react";
import "./App.scss";

import TodoForm from './components/TodoForm'
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
}

export default App;