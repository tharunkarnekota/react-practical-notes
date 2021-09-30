import React, { Component } from 'react'

export default class App extends Component {
  student={
    name : "tharun",
    age : 192
  }
  render() {
    return (
      <div>
        <center>
            <h2>my name is {this.student.name} with {this.student.age} years old</h2>
            
        </center>
      </div>
    )
  }
}
