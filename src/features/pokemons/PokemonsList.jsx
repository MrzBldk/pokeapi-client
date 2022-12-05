import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { Spinner } from '../../components/Spinner'
import { fetchPokemons, selectAllPokemons } from './pokemonsSlice'

const PokemonExcerpt = ({ pokemon }) => {
    return (
        <article>
            <img src={pokemon.image} alt={pokemon.name} />
            <div>
                <h3>{pokemon.name}</h3>
                <Link to={`/pokemons/${pokemon.name}`} className="button">
                    View Pokemon Info
                </Link>
            </div>
        </article>
    )
}

export const PokemonsList = () => {
    const dispatch = useDispatch()
    const pokemons = useSelector(selectAllPokemons)

    const pokemonsStatus = useSelector(state => state.pokemons.status)
    const error = useSelector(state => state.pokemons.error)

    useEffect(() => {
        if (pokemonsStatus === 'idle') {
            dispatch(fetchPokemons())
        }
    }, [pokemonsStatus, dispatch])

    let content

    let [searchTerm, updateSearchTerm] = useState('')

    const handleSearch = event => {
        updateSearchTerm(event.target.value)
    };

    if (pokemonsStatus === 'loading') {
        content = <Spinner text="Loading..." />
    } else if (pokemonsStatus === 'succeeded') {
        content = pokemons
            .filter(pokemon => pokemon.name.includes(searchTerm.toLowerCase()))
            .map(pokemon => <PokemonExcerpt key={pokemon.id} pokemon={pokemon} />)
    } else if (pokemonsStatus === 'failed') {
        content = <div>{error}</div>
    }

    return (
        <section className='mainSection'>
            <h2>Pokemons</h2>
            <input
                onChange={handleSearch}
                value={searchTerm}
                type="text"
                placeholder="Search"
            />
            <div className='pokemon-list'>
                {content}
            </div>
        </section>
    )
}