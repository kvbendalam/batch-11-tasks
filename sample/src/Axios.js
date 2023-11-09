import React, { Component } from 'react'
import axios from 'axios'

export default class Axios extends Component {

    constructor() {
        super()
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(res => this.setState({ data: res.data }))
    }

    render() {
        return (
            <div>
                <p>{this.state.data.userId}</p>
                <p>{this.state.data.id}</p>
                <p>{this.state.data.title}</p>
            </div>
        )
    }
}
