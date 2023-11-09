import React from 'react'
import { useParams } from 'react-router-dom'

function Course() {

    const url = useParams()

    return (
        <div>Welcome to {url.name} course</div>
    )
}

export default Course