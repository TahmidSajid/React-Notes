import { useEffect, useState } from 'react'
import './App.css'
import NewTodo from './components/NewTodo'
import Todos from './components/Todos';

function App() {
  let [todos,setTodos]  = useState([]); 

  let getTodo = (newTodo) => {
    setTodos((prevTodos)=>{
      return [...prevTodos,newTodo]
    })
  } 

  let deleteTodo = (id) => {
    console.log(id)
    setTodos((prevTodos)=>{
      console.log(prevTodos)
      return prevTodos.filter((todo) => todo.key !== id);
    })
  }

  useEffect(() => {
    console.log("Todos updated:", todos);
  }, [todos]);

  return (
    <>
      <div className={'container'}>
        <NewTodo onAddTodo={getTodo}/>
        <Todos todos={todos} onDeleteTodo={deleteTodo}/>
      </div>
    </>
  )
}

export default App
