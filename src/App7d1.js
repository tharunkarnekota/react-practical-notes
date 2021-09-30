import React, { Component } from 'react'
import Displayy from './display'

export default class App extends Component {
  state={
    name : "tharun",
    age : 19
  }
  render() {
    return (
      <div>
        <center>
            <h2>my name is {this.state.name} with {this.state.age} yearrs old</h2>
            <br>
            </br>
            <Displayy/>
        </center>
      </div>
    )
  }
}
