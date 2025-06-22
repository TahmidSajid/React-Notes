import React, { Component } from 'react'

export default class ClickableBttn extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         clicked : 0,
      }

      this.ClickCount = this.ClickCount.bind(this)
    }


    ClickCount(){
        this.setState({
            clicked : this.state.clicked + 1,
        })
    }



  render() {
    return (
      <>
      {/* <button type='button' onClick={this.ClickCount.bind(this)}>Click Me</button> */}
      <button type='button' onClick={this.ClickCount}>Click Me</button>
      <h1>{this.state.clicked}</h1>
      </>
    )
  }
}
