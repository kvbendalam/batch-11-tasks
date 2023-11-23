import React, { useEffect } from 'react'
import axios from 'axios'

function Putmethod() {

    useEffect(() => {
        update()
    }, [])


    function update() {
        const body =
        {
            "userId": 1,
            "id": 1,
            "title": "Entri elevate 11th Batch",
            "body": "Full stack course",
        }

        axios.put('https://jsonplaceholder.typicode.com/posts/1', body).then((response) => {
            console.log("Succesfully updated", response.data)
        })
    }

    return (
        <div>putmethod</div>
    )
}

export default Putmethod