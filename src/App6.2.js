import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      name : "tharun",
      age : 191
    }
  }
  render() {
    return (
      <div>
        <center>
            <h2>my name is {this.state.name} with {this.state.age} years old</h2>
        </center>
      </div>
    )
  }
}
