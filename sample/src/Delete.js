import React, { useEffect } from 'react'
import axios from 'axios'

function Delete() {

    useEffect(() => {
        deleteMethod()
    }, [])

    function deleteMethod() {
        axios.delete('https://jsonplaceholder.typicode.com/posts/1').then((response) => {
            console.log(response.data)
        })
    }

    return (
        <div>Delete</div>
    )
}

export default Delete