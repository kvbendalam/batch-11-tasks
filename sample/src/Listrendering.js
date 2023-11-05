import React, { Component } from 'react'

const employee = [
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

export default class Listrendering extends Component {
    render() {
        return (
            <div>
                {employee.map((row) => {
                    return (
                        <>
                            <p>{row.id}</p>
                            <p>{row.name}</p>
                            <p>{row.designation}</p>
                        </>
                    )
                })}
            </div>
        )
    }
}
