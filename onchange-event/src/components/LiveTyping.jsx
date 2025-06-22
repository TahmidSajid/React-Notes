import React, { Component } from 'react'

export default class LiveTyping extends Component {
  
  constructor(props) {
      super(props)
    
      this.state = {
         typedText : '',
      }
    }

    updateText = (e) => {
      this.setState({
        typedText : e.target.value,
      })
      console.log(e.target.value)
    }
    
  render() {
    return (
      <>
      <input type="text" onChange={this.updateText} />
      <h1>{this.state.typedText}</h1>
      </>
    )
  }
}
