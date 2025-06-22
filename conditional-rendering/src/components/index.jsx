import React, { Component } from 'react'
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import Button from './Button';

export default class index extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn : false
      }
    }

    login = () => {
      console.log(this.state.isLoggedIn)
      this.setState({
        isLoggedIn : true
      })
    }

    logout = () => {
      this.setState({
        isLoggedIn : false
      })
    }

  render() {

    let element;

    if (this.state.isLoggedIn) {
        element = <HomePage/>
    }
    else{
        element = <LoginPage/>
    }

    return (
      <>
      <div>{element}</div>
      <Button name="Login" function={this.login}/>
      <Button name="Logout" function={this.logout}/>
      </>
    )
  }
}
