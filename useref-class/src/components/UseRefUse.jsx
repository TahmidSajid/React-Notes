import React, { Component, createRef } from 'react'

export class UseRefUse extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        
      }

      this.userNameRef = createRef();
      this.userPasswordRef = createRef();
    }

    dataSubmit = (event) => {
      event.preventDefault();
      console.log(this.userNameRef.current.value);
      console.log(this.userPasswordRef.current.value);
    } 

    render() {
    return (
      <>
      <form onSubmit={this.dataSubmit}>

        <label htmlFor="userName">User Name</label>
        <input type="text" name="username" ref={this.userNameRef}/>

        <label htmlFor="password">User Password</label>
        <input type="password" name="password" ref={this.userPasswordRef}/>

        <button type='submit'>Submit</button>

      </form>
      </>
    )
  }
}

export default UseRefUse