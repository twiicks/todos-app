import './TodoSearch.css'
import React from 'react'

function TodoSearch({searchValue,setSearchValue}){
    return (
        <div className='input-container'>
            <input type="text" placeholder="Enter a word"
            value={searchValue}
            onChange={(event)=>{
                console.log(event.target.value);
                setSearchValue(event.target.value)
            }}/>
        </div>
    )
}

export {TodoSearch}