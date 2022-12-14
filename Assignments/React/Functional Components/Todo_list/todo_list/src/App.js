import React, { useState } from "react";
import './App.css';
import Form from "./components/Form";
import Display from "./components/Display"

function App() {
  const [todos, setTodos] = useState([]);
  const fin1 = (todo) => {
    setTodos([...todos,todo])
  }

  const deleteTask = (id) => {
    setTodos(todos.filter((todo,i).id!=i))
  }
  const updateTask = (id) => {
    const tasktoupdate = todos.filter((todo, i) => i == id);
    tasktoupdate[0].completed = !tasktoupdate[0].completed;
  }
  return (
    <div className="App">
      <Form todos={todos} myfun={fun1} />
      <Display todos={todos} deleteme={deleteTask} updateTask={updateTask} />
    </div>
      
  );

  }



export default App;
