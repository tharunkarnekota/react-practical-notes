import React, { Component } from 'react'

export default class App extends Component {
  state={
    name : "telugu skills",
  }
  render() {
    return (
      <div>
            <h2>welcome to {this.state.name}</h2>
      </div>
    )
  }
}
