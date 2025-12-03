import React, { useState,useEffect } from 'react';
import { v4 as uuid } from 'uuid';

const Form = ({handleNew}) => {

  const [todo,setTodo] = useState({
    id: '',
    title: '',
    desc: '',
  });

  const handleChange = (e) => {
    setTodo({...todo,[e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { ...todo, id: uuid() };
    handleNew(newTodo);

    setTodo({
      id: '',
      title: '',
      desc: '',
    });
  }
  
  // useEffect(() => {
   
  // }, [todo]);

  return (
    <>
    <h1 className='title'>Collect Data Form Form</h1>
    <div className={'card'}>
        <form className={'form'} onSubmit={handleSubmit}>
            <div className={'field-group'}>
                <label htmlFor='title'>Title</label>
                <input type="text" id='title' name='title' value={todo.title} required onChange={handleChange}/>
            </div>
            {/* <div className={'field-group'}>
                <label htmlFor='title'>Description</label>
                <input type="text" id='desc' name='desc' value={todo.desc} required onChange={handleChange}/>
            </div> */}
            <div className={'field-group'}>
                <label htmlFor='title'>Description</label>
                <textarea type="text" id='desc' name='desc' value={todo.desc} required onChange={handleChange}></textarea>
            </div>
            <div className={'field-group'}>
              <button className={'btn'} type='submit'>Submit</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default Form