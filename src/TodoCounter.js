import React from 'react'
import './TodoCounter.css'

function TodoCounter({completed, total}){
    return (
        <h1>
            <span>You have completed</span>
            <span>{completed} de {total} To Do</span>
        </h1>
    )
}

export {TodoCounter}