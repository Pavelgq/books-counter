import React, { useEffect } from 'react'

import useLocalStorage from '../../hooks/useLocalStorage'

import BookProcess from '../../components/BookProcess/BookProcess'

import styles from './library.module.css'
const Library = () => {
    const [myBooks, setBooks] = useLocalStorage('library')
    console.log(myBooks)
    const handleDelete = (title) => {
        //find myBooks with id and delete from localstorage array
        const index = myBooks.findIndex((element, index) => {
            console.log(element.title, title)
            if (element.title === title) {
                return true
            }
        })
        const newLibrary = myBooks.slice()
        newLibrary.splice(index, 1)
        setBooks(newLibrary)
        return newLibrary
    }

    const handlePages = (title, page) => {
        const index = myBooks.findIndex((element, index) => {
            console.log(element.title, title)
            if (element.title === title) {
                return true
            }
        })
        const newLibrary = myBooks.slice()
        newLibrary[index].readPageCount = page;
        setBooks(newLibrary)
        return newLibrary
    }

    const cards = myBooks && myBooks.map((book) => 
        (<li className={styles.list}>
            <BookProcess data={book} key={book.id} handleDelete={handleDelete} handlePages={handlePages}></BookProcess>
        </li>))

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Сейчас читаю</h2>
            <ul className={styles.grid}>
                 {cards}
            </ul>
        </div>
    )
}

export default Library