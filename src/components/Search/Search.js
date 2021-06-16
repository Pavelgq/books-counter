import React, { useEffect, useState, useContext } from 'react'
import useFetch from '../../hooks/useFetch'
import BooksContext from '../../contexts/booksContext'

import {myAPIkey} from '../../coverage'

import styles from './Search.module.css'

const Search = () => {
    const [books, setBooks] = useState('php')
    const url = `https://www.googleapis.com/books/v1/volumes?q=${books}&key=${myAPIkey}`
    
    const {data, setData} = useContext(BooksContext)

    const [{response, isLoading, error}, doFetch] = useFetch(url)
    const handleChange = (event) => {
        setBooks(event.target.value)
    }
    
    const [isSearch, setIsSearch]  = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault()  
        doFetch();
        setIsSearch(true);
    }

    useEffect(() => {
        if (!response) {
            return
        }
        setData(response)
        setIsSearch(false)
    }, [response, isSearch])
    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                {isLoading && (<p className={styles.title}>Loading...</p>)}
                {!isLoading && (<p className={styles.title}>Найти книгу</p>)}
                <input type="text" className={styles.field} value={books} placeholder="Search" onChange={handleChange} />
                <button type="submit" className={styles.button}>Поиск</button>
            </form>
            <div>{response && response.totalItems}</div>
        </>
    )
}

export default Search