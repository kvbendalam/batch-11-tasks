import React from "react"

function Employee(props) {
    return (
        <>
            <h1>Employee Details</h1>
            <p>{props.name}</p>
            <p>{props.salary}</p>
            <p>{props.designation}</p>
            <p>{props.city}</p>
        </>
    )
}


export default Employee;