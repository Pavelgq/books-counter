import React from 'react'

import useLocalStorage from '../../hooks/useLocalStorage'

import BookProcess from '../../components/BookProcess/BookProcess'

import styles from './library.module.css'
const Library = () => {
    const [myBooks, setBooks] = useLocalStorage('library')
    console.log(myBooks)
    const handleDelete = (id) => {
        //find myBooks with id and delete from localstorage array
        const index = myBooks.some((element, index) => {
            if (element.id === id) {
                return index
            }
        })

        // const newLibrary = myBooks.slice()
        // myBooks.splice(index, 1)
    }
    const cards = myBooks && myBooks.map((book) => 
        (<BookProcess data={book} key={book.id} handleDelete={handleDelete}></BookProcess>))
    return (
        <div className={styles.container}>
            <h2>Books</h2>
            <div className={styles.grid}>
                 {cards}
            </div>
        </div>
    )
}

export default Library