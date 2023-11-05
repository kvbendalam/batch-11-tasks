import React, { useState } from 'react'

function CounterinFunctional() {
    const [counter, setCounter] = useState(0)

    function incrementCounter() {
        setCounter(counter + 1)
    }

    function decrementCounter() {
        setCounter(counter - 1)
    }

    return (
        <div>
            <p>{counter}</p>
            <button onClick={incrementCounter}>Increment Counter</button>
            <button onClick={decrementCounter}>Decrement Counter</button>
        </div>
    )
}

export default CounterinFunctional