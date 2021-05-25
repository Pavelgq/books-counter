import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import {myAPIkey} from '../../coverage'

const Search = () => {
    const [books, setBooks] = useState('php')
    const url = `https://www.googleapis.com/books/v1/volumes?q=${books}&key=${myAPIkey}`
    const [data, setData] = useState()
    const [{booksData, loading, error}, doFetch] = useFetch(url)
    const handleChange = (event) => {
        console.log(event.target.value)
        // setBooks(event.target.value)    
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(data)
    }

    useEffect(() => {
        doFetch()
    }, [doFetch])

    console.log(loading, error)

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