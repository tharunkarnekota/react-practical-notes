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
            <button type="button" onClick={()=>this.setState({age:this.state.age+1})}>increment</button>
            <button type="button" onClick={()=>this.setStudent({age:this.state.age+1})}>increment</button>
        </center>
      </div>
    )
  }
}
