import React, { useEffect } from 'react'
import axios from 'axios'

function Postmethod() {

    useEffect(() => {
        insertPost()
    }, [])

    function insertPost() {
        const body =
        {
            "userId": 101,
            "id": 101,
            "title": "Entri elevate 11th Batch",
            "body": "Full stack course",
        }

        axios.post('https://jsonplaceholder.typicode.com/posts', body).then((response) => {
            console.log("Succesfully inserted new user", response.data)
        })
    }

    return (
        <div>Postmethod</div>
    )
}

export default Postmethod