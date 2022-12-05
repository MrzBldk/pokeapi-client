import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav>
            <section>
                <h1>PokeAPI Client</h1>
                <div className={styles.navContent}>
                    <div className={styles.navLinks}>
                        <Link to="/">Pokemons</Link>
                        <Link to="/owned">My Pokemons</Link>
                    </div>
                </div>
            </section>
        </nav>
    )
}