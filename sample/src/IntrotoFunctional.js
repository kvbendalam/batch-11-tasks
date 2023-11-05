import React, { useState } from 'react'

function IntrotoFunctional() {

    const [state, setState] = useState('Welcome to Entri Elevate')


    function updateState() {
        setState("Welcome to Batch 11")
    }

    return (
        <div>
            <p>{state}</p>
            <button onClick={updateState}>Update</button>
        </div>
    )
}

export default IntrotoFunctional