import React, { Component } from 'react'

export default class ClassExample extends Component {
    constructor() {
        super()
        this.state = {
            name: "Vamsi",
            city: "Hyd",
            designation: "Software Engineer"
        }
    }

    handleUpdate = () => {
        this.setState({
            name: "Nawaz",
            city: "Bangalore"
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.name}</p>
                <p>{this.state.city}</p>
                <p>{this.state.designation}</p>
                <button onClick={this.handleUpdate}>Update details</button>
            </div>
        )
    }
}
