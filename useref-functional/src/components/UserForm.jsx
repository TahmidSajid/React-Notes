import React, { useRef } from 'react'

const UserForm = () => {

    let userNameRef = useRef();
    let userPasswordRef = useRef();

    let dataSubmit = (event) => {
        event.preventDefault();
        console.log(userNameRef.current.value);
        console.log(userPasswordRef.current.value);
    } 
  return (
    <form onSubmit={dataSubmit}>

        <label htmlFor="userName">User Name</label>
        <input type="text" name="username" ref={userNameRef}/>

        <label htmlFor="password">User Password</label>
        <input type="password" name="password" ref={userPasswordRef}/>

        <button type='submit'>Submit</button>

      </form>
  )
}

export default UserForm