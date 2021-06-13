import React, { useState } from 'react'

import styles from './BookProcess.module.css'

const BookProcess = ({data}) => {
    const [complitePages, setComplitePages] = useState(0)

    const allPages = 1000;

    const handleChange = (event) => {
        setComplitePages(event.target.value)
    }
    const handleClick = () => {
        console.log('delete book from library')
    }
    
    const persent = Math.floor((complitePages / allPages) * 100)
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{data.title}</h3>
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
           

            <button type='button' className={styles.button} onClick={handleClick}>Удалить</button>
        </div>
    )
}

export default BookProcess