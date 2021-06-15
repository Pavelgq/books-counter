import React, { useState } from 'react'

import styles from './BookProcess.module.css'

const BookProcess = ({data, handleDelete, handlePages}) => {
    const [complitePages, setComplitePages] = useState(data.readPageCount || 0)
    
    const imageLink = data.imageLinks 
        || 'https://st4.depositphotos.com/2381417/26959/i/600/depositphotos_269592714-stock-photo-no-thumbnail-image-placeholder-for.jpg'

    const allPages = data.pageCount || 1000;

    const fixTitle = (title, length) => {
        let newTitle = title;
        if (title.length > length) {
            newTitle = title.slice(0,length) + '...'
        }
        return newTitle
    }

    const handleChange = (event) => {
        setComplitePages(event.target.value)
        handlePages(data.title, event.target.value)
    }
    const handleClick = () => {
        console.log('delete book from library')
        handleDelete(data.title)
    }
    
    const persent = Math.floor((complitePages / allPages) * 100)
    return (
        <>
            <div className={styles.container}>
                <a href='#' className={styles.link}>
                    <img 
                        className={styles.image} 
                        src={imageLink.thumbnail}
                        alt={data.title}
                    ></img>
                </a>
                <button type='button' className={styles.button} onClick={handleClick}>X</button>
            </div>
            
            <div className={styles.container}>
                <h3 className={styles.title}>{fixTitle(data.title, 18)}</h3>
                <p className={styles.textRow}>
                    <span className={styles.rowTitle}>Всего страниц: </span>
                    <span className="row-value">{allPages}</span>
                </p>
                <p className={styles.textRow}>
                    <span className={styles.rowTitle}>Прочитано: </span>  
                    <input type="number" className={styles.rowField} value={complitePages} onChange={handleChange} />
                </p>
                <p className={styles.textRow}>
                    <span>Процент: </span> 
                    <span>{persent}%</span>
                </p>
                
            </div>
            
           

            
        </>
    )
}

export default BookProcess