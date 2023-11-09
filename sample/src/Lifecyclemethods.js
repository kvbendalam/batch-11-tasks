import React, { useEffect, useState } from 'react'

function Lifecyclemethods() {

    const [name, setName] = useState('Entri')


    //ComponentDidMount
    useEffect(() => {
        setName("Entri Elevate Batch 11")
    })

    //ComponentDidUpdate
    useEffect(() => {
        console.log("Name is updated")
    }, [name])


    //componentWillUnmount
    useEffect(() => {
        return () => {
            console.log("This is component unmount state")
        }
    })



    return (
        <div>{name}</div>
    )
}

export default Lifecyclemethods