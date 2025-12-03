import React from 'react'
import Todo from './Todo'

const Todos = ({Todos}) => {
  return (
    <>
    <div className='todos'>
      {Todos.map((todo)=>{
        return <Todo key={todo.id} id={todo.id} title={todo.title} desc={todo.desc}/>
      })}
    </div>
    </>
  )
}

export default Todos