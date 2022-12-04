import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

export const Navbar = () => {
    return (
        <nav>
            <section>
                <h1>PokeAPI Client</h1>
                <div className="navContent">
                    <div className="navLinks">
                        <Link to="/">Pokemons</Link>
                        <Link to="/Owned">My Pokemons</Link>
                    </div>
                </div>
            </section>
        </nav>
    )
}