import React, { Component } from 'react'

export default class Fetch extends Component {

    constructor() {
        super()
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(res => res.json())
            .then(resp => this.setState({ data: resp }))
    }

    render() {
        return (
            <div>
                <p>{this.state.data.userId}</p>
                <p>{this.state.data.id}</p>
                <p>{this.state.data.title}</p>
                {/* <p>{this.state.data.completed}</p> */}
            </div>
        )
    }
}
