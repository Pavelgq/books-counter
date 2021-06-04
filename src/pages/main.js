import React, { useContext } from 'react'
import BookCard from '../components/BookCard/BookCard'
import Search from '../components/Search/Search'

import BooksContext from '../contexts/booksContext'
const Main = () => {
    const {data, setData} = useContext(BooksContext)
    console.log(data)
    const books = data && data.items.map((book, index) => (<BookCard data={book} key={index}></BookCard>))
    console.log(books)
    return (
        <> 
            <Search></Search>
            {books}
        </>
    )
}

export default Main