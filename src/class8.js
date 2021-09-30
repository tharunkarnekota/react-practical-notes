import React, { Component } from 'react'
import Cp from './classprops3'

export default class App extends Component {
  state ={
    name : "tharun",
    products : []
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos/').then(
      res => res.json()
    ).then(data => this.setState({products: data})).catch(err => console.log(err))
  }
    render() {
        return (
            <div>
               
              <Cp data={this.state.products}/>


               
            </div>
        )
    }
}
