import React from 'react';
import TodoItem from "./components/TodoItem"
import todosData from ".components/todosData"
import './App.css';

function App() {
  return (
    <div>
      <TodoItem />
      <todosData />
    </div>
  );
}

export default App;
