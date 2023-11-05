import React, { Component } from 'react'

export default class Birthday extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            wish: ''
        }
    }

    handleName = (event) => {
        this.setState({ name: event.target.value })
    }

    handleWish = (event) => {
        this.setState({ wish: event.target.value })
    }

    handleSumbit = (event) => {
        event.preventDefault()
        console.log(this.state.name + " wishes you " + this.state.wish);
    }

    render() {
        return (
            <div>
                <h1>Birthday Wishes form</h1>
                <form onSubmit={this.handleSumbit}>
                    <input type="text" onChange={this.handleName} />
                    <input type="text" onChange={this.handleWish} />
                    <input type="Submit" value="submit" />
                </form>
            </div>
        )
    }
}
