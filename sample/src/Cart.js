import React, { Component } from 'react'

export default class Cart extends Component {
    constructor() {
        super()
        this.state = {
            value: 0
        }
    }

    addItem = () => {
        this.setState({
            value: this.state.value + 1
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.value}</p>
                <button onClick={this.addItem}>Add to Cart</button>
            </div>
        )
    }
}
