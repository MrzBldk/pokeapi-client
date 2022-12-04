import { getPokemonCountQuery, getPokemonListQuery, getPokemonInfoQuery } from "./queries";

const url = 'https://graphql-pokeapi.graphcdn.app/'

async function fetchPokemonCount() {
    const countResponce = await fetch(url, {
        credentials: 'omit',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: getPokemonCountQuery
        }),
        method: 'POST',
    })
    const countData = await countResponce.json();
    return countData.data.pokemons.count
}

async function fetchPokemonList(limit) {
    const pokemonsResponce = await fetch(url, {
        credentials: 'omit',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: getPokemonListQuery,
            variables: { offset: 0, limit }
        }),
        method: 'POST',
    })
    const pokemonsData = await pokemonsResponce.json()
    return pokemonsData.data.pokemons.results
}

async function fetchPokemonInfo(name) {
    const infoResponce = await fetch(url, {
        credentials: 'omit',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: getPokemonInfoQuery,
            variables: { name }
        }),
        method: 'POST',
    })
    const pokemonInfo = await infoResponce.json()
    const pokemon = pokemonInfo.data.pokemon
    return pokemon
}

export { fetchPokemonCount, fetchPokemonList, fetchPokemonInfo }