import React, { Component } from 'react'

export default class ListRenderingS extends Component {

    constructor() {
        super()
        this.state = {
            employee: [
                {
                    id: 1,
                    name: "nawaz",
                    designation: "Software Engineer"
                },
                {
                    id: 2,
                    name: "Divya",
                    designation: "Senior software Engineer"
                },
                {
                    id: 3,
                    name: "Anil",
                    designation: "Associate software Engineer"
                },
                {
                    id: 4,
                    name: "Krishna",
                    designation: "Associate software Engineer"
                }
            ]
        }
    }


    render() {
        return (
            <div>
                {this.state.employee.map((row) => {
                    return (
                        <div key={row.id}>
                            <p>{row.id}</p>
                            <p>{row.name}</p>
                            <p>{row.designation}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
