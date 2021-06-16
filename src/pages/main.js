import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';

import BookCard from '../components/BookCard/BookCard'
import Search from '../components/Search/Search'

import BooksContext from '../contexts/booksContext'

import styles from './main.module.css'

const Main = () => {
    const {data, setData} = useContext(BooksContext)
    console.log(data)
    const books = data && data.items.map((book, index) => (<BookCard data={book} key={book.id}></BookCard>))
    return (
        <section className={styles.container}> 
            <Search></Search>
            <ul className={styles.list}>
                {books}
            </ul>
            <div>
                
            </div>
        </section>
    )
}

export default Main