import React, { useEffect } from 'react';
import './App.css';
import Todos from './components/Todos/todos';

const App = () => {

  return (
    <div className="App">
      <h2>Todo App</h2>
      <Todos />
    </div>
  );
}

export default App;
