import React, { Component } from 'react'
import Cp from './classprops2'

export default class App extends Component {
  state ={
    name : "tharun",
    products : []
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos/').then(
      res => res.json()
    ).then(data => console.log(data))
  }
    render() {
        return (
            <div>
                <center>
                    <h1>hello world</h1>
                    <h2>{this.state.name}</h2>
                    <button onClick={()=>this.setState({name:"kalyannnn"})}>click to change</button>

                    <Cp data={this.state.name}/>
                </center>
            </div>
        )
    }
}


