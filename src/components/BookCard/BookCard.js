import React from 'react'

import styles from './BookCard.module.css'

const BookCard = ({data}) => {
    console.log(data.id)

    const imageLink = data.volumeInfo.imageLinks || 'https://st4.depositphotos.com/2381417/26959/i/600/depositphotos_269592714-stock-photo-no-thumbnail-image-placeholder-for.jpg'
    return (
        <div className={styles.card}>
               
                <h3 className={styles.title}>Книга номер</h3> 
                <img className={styles.image} src={imageLink.thumbnail}></img>
                <p>{data.volumeInfo.title}</p>  

                <button className={styles.button}>Сохранить</button>
        </div>
    )
}

export default BookCard