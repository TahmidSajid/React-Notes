import React from 'react'

const Todo = (props) => {
  return (
    <>
        <p key={props.key}>{props.todo}</p>
    </>
  )
}

export default Todo