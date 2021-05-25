import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import {myAPIkey} from '../../coverage'

const Search = () => {
    const [books, setBooks] = useState('php')
    const [data, setData] = useState()
    const {booksData, loading, error} = useFetch(`https://www.googleapis.com/books/v1/volumes?q=${books}&key=${myAPIkey}`, {})
    const handleChange = (event) => {
        setBooks(event.target.value)    
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(data)
    }

    console.log(booksData)
    return (
        <form onSubmit={handleSubmit}>
             <input type="text" value={books} placeholder="Search" onChange={handleChange} />
            <button type="submit">Отправить</button>
            <div>{booksData}</div>
        </form>
    )
}

export default Search