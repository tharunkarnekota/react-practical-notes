import React, { Component } from 'react'

export default class display extends Component {
    render() {
        return (
            <div>
                <h2>i am  from display component my owner is {this.props.name}</h2>

            </div>
        )
    }
}
