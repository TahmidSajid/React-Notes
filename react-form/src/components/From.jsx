import React from 'react'
import { useState } from 'react'

function From() {

  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  let handleEmail = (e) => {
    setEmail(e.target.value);
  }
  
  let handlePassword = (e) => {
    setPassword(e.target.value);
  }

  let handleSubmit = (e) => {
    console.log(email, password);
    e.preventDefault();
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" name='email' placeholder='Enter Your Email' onChange={handleEmail}/>
        </div>
        <div>
          <label>Password</label>
          <input type="password" name='password' placeholder='***********' onChange={handlePassword}/>
        </div>
        <button type='submit'>Register</button>
      </form>
    </>
  )
}

export default From