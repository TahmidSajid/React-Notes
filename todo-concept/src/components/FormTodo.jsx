import React, { useState } from 'react'

const FormTodo = (props) => {

    const [todo, setTodo] = useState("")

    let handleTodo = (e) => {
        setTodo(e.target.value);
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        props.onTodo(todo);
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
        <label htmlFor="todo">Todo</label>
        <input type="text" onChange={handleTodo} id="todo" name="todo"/>
        <button type="submit">Add</button>
        </form>
    </>
  )
}

export default FormTodo