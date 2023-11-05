import React, { Component } from 'react'
import './MarksTable.css'

export default class MarksTable extends Component {

    constructor() {
        super()
        this.state = {
            marks: [
                {
                    id: 1,
                    name: "Vamsi",
                    telugu: 99,
                    hindi: 100,
                    english: 99,
                    computers: 100
                },
                {
                    id: 2,
                    name: "Krishna",
                    telugu: 99,
                    hindi: 100,
                    english: 99,
                    computers: 100
                },
                {
                    id: 3,
                    name: "Swathi",
                    telugu: 99,
                    hindi: 100,
                    english: 99,
                    computers: 100
                },
                {
                    id: 4,
                    name: "Haritha",
                    telugu: 99,
                    hindi: 100,
                    english: 99,
                    computers: 100
                }
            ]
        }
    }

    render() {
        return (
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Telugu</th>
                    <th>Hindi</th>
                    <th>English</th>
                    <th>Computers</th>
                </tr>
                {this.state.marks.map((row) => {
                    return (
                        <tr>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.telugu}</td>
                            <td>{row.hindi}</td>
                            <td>{row.english}</td>
                            <td>{row.computers}</td>
                        </tr>
                    )
                })}
            </table>
        )
    }
}
