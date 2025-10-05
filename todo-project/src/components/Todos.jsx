import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
  return (
    <>
        <section className={'todos'}>
          {props.todos.map((todo) => {
            return <Todo key={todo.key} id={todo.key} todo={todo} onHandleDelete={props.onDeleteTodo}/>    
          })}
        </section>
    </>
  )
}

export default Todos