import React, { Component } from 'react'

export default class Lifecycle extends Component {

    constructor() {
        super()
        this.state = {
            age: 18,
            todos: {}
        }
    }

    makeAPICall() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(res => res.json())
            .then(resp => this.setState({ todos: resp }))
    }

    componentDidMount() {
        // this.makeAPICall()
    }


    componentWillUnmount() {
    }

    componentDidUpdate() {
        // this.makeAPICall()
        console.log("State is updated")
    }

    updateAge = () => {
        this.setState({ age: 24 })
    }

    render() {
        return (
            <div>Age {this.state.age}
                <button onClick={this.updateAge}>Update state</button>

                <p>{this.state.todos.userId}</p>
                <p>{this.state.todos.title}</p>
                <p>{this.state.todos.id}</p>
                <p>{this.state.todos.completed}</p>
            </div>
        )
    }
}
