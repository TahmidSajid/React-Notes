import React from 'react'
import { MdDelete } from "react-icons/md";

const Todo = (props) => {

    const {title, desc} = props.todo;

    let hendleDeleteClick = () => {
        props.onHandleDelete(props.id)
    }

  return (
    <>
    <div className={'todo'} >
        <div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
        <div>
            <button className={'btn'} onClick={hendleDeleteClick}>
                <MdDelete/>
            </button>
        </div>
    </div>
    </>
  )
}

export default Todo