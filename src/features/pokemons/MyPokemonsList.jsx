import React, { useEffect, useState } from 'react'

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

    const [update, setUpdate] = React.useState("");

    const handleChange = React.useCallback((newValue) => {
        setUpdate(newValue);
    }, []);

    useEffect(() => {
        const savedPokemons = localStorage.getItem('pokemons')
        const arr = savedPokemons ? JSON.parse(savedPokemons) : []
        setMypokemons(arr)
    }, [update])

    let content = myPokemons.map(pokemon => (
        <MyPokemonExcerpt key={pokemon.name} pokemon={pokemon} onChange={handleChange} />
    ))

    return (
        <section>
            <h2>My Pokemons</h2>
            <div className='pokemon-list'>
                {content}
            </div>
        </section>
    )
}