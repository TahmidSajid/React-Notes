import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NewTodo = (props) => {

    let [todo, setTodo] = useState({key:uuidv4(), title:"",desc:""});

    let setChanges = (e) => {
        setTodo((prevTodos) => {
            return {...prevTodos,[e.target.name]:e.target.value}
        });
    }

    let handleNewTodo = (e) => {
        e.preventDefault();
        props.onAddTodo(todo);
        setTodo({key:uuidv4(),title:"",desc:""});
    }

  return (
    <>
    <form className={'form'} onSubmit={handleNewTodo}>
        <h1>Todo App</h1>
        <div className={'form-field'}>
            <label htmlFor="title">Title</label>
            <input name="title" type="text" onChange={setChanges}/>
        </div>
        <div className={'form-field'}>
            <label htmlFor="desc">Description</label>
            <textarea name="desc" id="desc" onChange={setChanges}></textarea>
        </div>
        <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default NewTodo