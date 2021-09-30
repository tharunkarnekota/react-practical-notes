import React, { Component } from 'react'


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
               
                {this.state.products.map((product)=><li key={product.id}>{product.title}</li>)}


               
            </div>
        )
    }
}
