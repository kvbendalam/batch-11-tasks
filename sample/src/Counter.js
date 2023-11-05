import React, { Component } from 'react'

export default class Counter extends Component {

    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }

    increment = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    incrementBy2 = () => {
        this.setState({ counter: this.state.counter + 2 })
    }

    decrement = () => {
        this.setState({ counter: this.state.counter - 1 })
    }

    render() {
        return (
            <>
                <div>Counter {this.state.counter}</div>
                <button onClick={this.increment}>Increment Counter</button>
                <button onClick={this.incrementBy2}> Increment By 2</button>
                <button onClick={this.decrement}>Decrement</button>
            </>
        )
    }
}
