import React, { Component } from 'react'

export default class States extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        count : this.props.count,
      }
    }
    
    increamentNumbner = () => {
       this.setState({
        count : this.state.count +1,
       })
    }

    decreamentNumbner = () => {
       this.setState({
        count : this.state.count -1,
       })
    }
    
    
    render() {
       
    return (
      <>
      <div>{this.state.count}</div>
      <button onClick={this.increamentNumbner} disabled={this.state.count >= 5 ? true : false }>+</button>
      <button onClick={this.decreamentNumbner} disabled={this.state.count <= 0 ? true : false }>-</button>
      </>
    )
  }
}
