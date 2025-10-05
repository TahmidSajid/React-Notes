import { useState } from 'react';
import './App.css'
import FormTodo from './components/FormTodo'
import Todo from './components/Todo';

function App() {

  let [todos, setTodo] = useState(['Hello','Hi']);

  let handleTodo = (e) => {
    setTodo([...todos,e])
  }
  
  return (
    <>
      <FormTodo onTodo={handleTodo}/>
      {todos.map((e,index)=>{
        return <Todo key={index} todo={e}/>
      })}
    </>
  )
}

export default App
