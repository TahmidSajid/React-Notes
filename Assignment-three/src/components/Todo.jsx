import React from 'react'

const Todo = ({id,title,desc}) => {
  console.log(id);
  return (
    <>
    <article className='todo'>
      <div className='todo__title'>{title}</div>
      <p>{desc}</p>
    </article>
    </>
  )
}

export default Todo