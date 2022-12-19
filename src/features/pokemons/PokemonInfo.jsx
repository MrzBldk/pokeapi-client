import React, { useState, useEffect } from 'react'

import { Spinner } from 'components/Spinner'
import pokeapiFetches from 'api/pokeapi-fetches';

const CatchButton = ({ pokemon }) => {

    const save = () => {
        const savedPokemons = localStorage.getItem('pokemons')
        const arr = savedPokemons ? JSON.parse(savedPokemons) : []
        if (!arr.some(p => p.name === pokemon.name))
            arr.push(pokemon)
        localStorage.setItem('pokemons', JSON.stringify(arr))
    }

    return <button onClick={save} className='button'>Catch!</button>
}

export const PokemonInfo = ({ match }) => {

    const { name } = match.params

    const [info, setInfo] = useState(null);

    useEffect(() => {
        let ignore = false
        const fetch = async () => {
            const info = await pokeapiFetches.fetchPokemonInfo(name)
            if (!ignore) setInfo(info)
        }
        fetch()
        return () => { ignore = true; }
    }, [name])

    let content;
    if (info) {
        let types = info.types.map(res =>
            <span
                className={res.type.name + ' tag'}
                key={res.type.name}
            >
                {res.type.name}
            </span>
        )
        let stats = info.stats.map(res => (
            <p className={'pokemon-stat'} key={res.stat.name}>
                <b>
                    {res.stat.name}: <span className={res.base_stat > 90 ? 'high' : ''}>
                        {res.base_stat}
                    </span>
                </b>
            </p>
        ))
        content = (
            <section className='mainSection'>
                <h2>{info.name}</h2>
                <img alt={info.name} src={info.sprites.front_default} />
                <img alt={info.name} src={info.sprites.back_default} />
                <p><b>Height:</b> {info.height}</p>
                <p><b>Weight:</b> {info.weight}</p>
                <p><b>Types:</b> {types}</p>
                <p><b>Stats:</b></p>
                {stats}
                <CatchButton pokemon={info} />
            </section>
        )
    } else {
        content = <Spinner text='Loading' />
    }

    return content
}