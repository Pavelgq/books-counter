import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './TopBar.module.css'

const TopBar = () => {

    return (
         <nav className={styles.nav}>
            <NavLink to={`/`} className={styles.link} activeClassName={styles.activeLink} exact>Поиск</NavLink>
            <NavLink to={`/library`} className={styles.link} activeClassName={styles.activeLink}>Мои книги</NavLink>
        </nav>
    )
}

export default TopBar