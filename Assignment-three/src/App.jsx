import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Form from './components/Form';
import Todos from './components/Todos';
import { useState } from 'react';

function App() {
  let todosData = [
    {
      id: uuidv4(),
      title: 'read react documentation',
      desc: 'react documentation might be boring but I can do it'
    },
    {
      id: uuidv4(),
      title: 'do react assignment',
      desc: 'react assignments might be boring but I can do it'
    }
  ];

  const [todos, setTodos] = useState(todosData);


  let storeTodo = (todo) => {
    setTodos([...todos,todo]);
  }

  return (
    <>
    <div className={'container'}>
      <Form handleNew={storeTodo}/>
      <Todos Todos={todos} />
    </div>
    </>
  )
}

export default App
