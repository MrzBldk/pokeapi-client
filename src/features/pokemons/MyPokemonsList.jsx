import React, { useEffect, useState, useCallback } from 'react'

const MyPokemonExcerpt = ({ pokemon, onChange }) => {

    const remove = event => {
        const savedPokemons = localStorage.getItem('pokemons')
        const arr = JSON.parse(savedPokemons)
        const newArr = arr.filter(p => p.name !== pokemon.name)
        localStorage.setItem('pokemons', JSON.stringify(newArr))
        onChange(event.target);
    }

    return (
        <article>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <div>
                <h3>{pokemon.name}</h3>
                <button onClick={remove} className="muted-button">
                    Remove from My Pokemons
                </button>
            </div>
        </article>
    )
}

export const MyPokemonsList = () => {

    const [myPokemons, setMypokemons] = useState([])

    const [update, setUpdate] = useState("");

    const handleChange = useCallback((newValue) => {
        setUpdate(newValue);
    }, []);

    useEffect(() => {
        const savedPokemons = localStorage.getItem('pokemons')
        const arr = savedPokemons ? JSON.parse(savedPokemons) : []
        setMypokemons(arr)
    }, [update])

    return (
        <section className='mainSection'>
            <h2>My Pokemons</h2>
            <div className='pokemon-list'>
                {myPokemons.map(pokemon => (
                    <MyPokemonExcerpt key={pokemon.name} pokemon={pokemon} onChange={handleChange} />
                ))}
            </div>
        </section>
    )
}