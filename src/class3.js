import React, { Component } from 'react'

export default class App extends Component {
  state ={
    name : "tharun"
  }
    render() {
        return (
            <div>
                <center>
                    <h1>hello world</h1>
                    <h2>{this.state.name}</h2>
                    <button onClick={()=>this.setState({name:"kalyannnn"})}>click to change</button>
                </center>
            </div>
        )
    }
}
