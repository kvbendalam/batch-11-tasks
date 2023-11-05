import React from 'react'

function EventHandlinginFun() {

    const handleClick = () => {
        console.log("Button is clicked in Functional based component")
    }

    return (
        <div>
            <button onClick={handleClick}>Click me in Functional Based component</button>
        </div>
    )
}

export default EventHandlinginFun