import React, { Component } from 'react'

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsername = (event) => {
        this.setState({ username: event.target.value })
    }

    handlePassword = (event) => {
        this.setState({ password: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.username, this.state.password)
    }

    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleUsername} />
                    <input type="password" onChange={this.handlePassword} />
                    <input type="Submit" name="Submit" value="Submit" />
                </form>

            </div>
        )
    }
}
