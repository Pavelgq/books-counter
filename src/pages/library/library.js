import React, { useContext } from 'react'

import useLocalStorage from '../../hooks/useLocalStorage'
import LibraryContext from '../../contexts/libraryContext'

import BookProcess from '../../components/BookProcess/BookProcess'

const Library = () => {
    const [myBooks, setBooks] = useLocalStorage('library')
    console.log(myBooks)
    const cards = myBooks && myBooks.map((book, index) => (<BookProcess data={book} key={book.id}></BookProcess>))
    return (
        <div>
            Books
            {cards}
        </div>
    )
}

export default Library