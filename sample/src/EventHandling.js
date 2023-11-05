import React, { Component } from 'react'

export default class EventHandling extends Component {

    handleClick = () => {
        console.log("Button is clicked")
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}
