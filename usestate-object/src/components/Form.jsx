import React,{ useState } from 'react'

function Form() {

    let [user, setUser] = useState({
        email: "",
        password: "",
    });

    let handleInput = (e) => {
        setUser({...user,[e.target.name]:e.target.value});
    }
    
    let handleSubmit = (e) => {
        console.log(user);
        e.preventDefault();
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" name='email' placeholder='Enter Your Email' onChange={handleInput}/>
        </div>
        <div>
          <label>Password</label>
          <input type="password" name='password' placeholder='***********' onChange={handleInput}/>
        </div>
        <button type='submit'>Register</button>
      </form>
    </>
  )
}

export default Form