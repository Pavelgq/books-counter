import React, { useContext } from 'react'

import styles from './BookCard.module.css'

import LibraryContext from '../../contexts/libraryContext'

const BookCard = ({data}) => {
    const {library, setLibrary} = useContext(LibraryContext)
    const imageLink = data.volumeInfo.imageLinks 
        || 'https://st4.depositphotos.com/2381417/26959/i/600/depositphotos_269592714-stock-photo-no-thumbnail-image-placeholder-for.jpg'
    const addLibrary = () => {
        setLibrary((value) => {
            return [...value, data.volumeInfo]
            })
    }
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>Книга номер</h3> 
            <img 
                className={styles.image} 
                src={imageLink.thumbnail}
                alt={data.volumeInfo.title}
            ></img>
            <p>{data.volumeInfo.title}</p>  
            <button className={styles.button} onClick={addLibrary}>Сохранить</button>
        </div>
    )
}

export default BookCard