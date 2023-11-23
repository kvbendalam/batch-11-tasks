import React, { useContext } from 'react'
import { context } from './ComponentA'

function ComponentC() {

    const company = useContext(context)

    return (
        <div>ComponentC - {company}</div>
    )
}

export default ComponentC