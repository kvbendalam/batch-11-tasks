import React, { Component } from 'react'
import Vote from './Vote'
import Person from './Person'

export default class ConditionalRendering extends Component {

    constructor() {
        super()
        this.state = {
            age: 16
        }
    }


    render() {
        return (
            <div>
                {this.state.age > 18 ? <Vote /> : <Person />}
            </div>
        )
    }
}
