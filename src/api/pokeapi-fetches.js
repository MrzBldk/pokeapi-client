import pokeapiQueries from "./pokeapi-queries";

const url = process.env.REACT_APP_POKEAPI_URL

async function fetchPokemonCount() {
    const countResponce = await fetch(url, {
        credentials: 'omit',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: pokeapiQueries.getPokemonCountQuery
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
            query: pokeapiQueries.getPokemonListQuery,
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
            query: pokeapiQueries.getPokemonInfoQuery,
            variables: { name }
        }),
        method: 'POST',
    })
    const pokemonInfo = await infoResponce.json()
    const pokemon = pokemonInfo.data.pokemon
    return pokemon
}

const pokeapiFetches = { fetchPokemonCount, fetchPokemonList, fetchPokemonInfo }

export default pokeapiFetches