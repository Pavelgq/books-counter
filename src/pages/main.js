import React, { useContext } from 'react'
import BookCard from '../components/BookCard/BookCard'
import Search from '../components/Search/Search'

import BooksContext from '../contexts/booksContext'

import styles from './main.module.css'

const Main = () => {
    const {data, setData} = useContext(BooksContext)
    console.log(data)
    const books = data && data.items.map((book, index) => (<BookCard data={book} key={book.id}></BookCard>))
    console.log(books)
    return (
        <> 
            <Search></Search>
            <div className={styles.container}>
                {books}
            </div>
            
        </>
    )
}

export default Main