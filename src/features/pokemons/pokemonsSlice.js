import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import pokeapiFetches from 'api/pokeapi-fetches'

const initialState = {
    pokemons: [],
    status: 'idle',
    error: null
}

export const fetchPokemons = createAsyncThunk('pokemons/fetchPokemons', async () => {
    const count = await pokeapiFetches.fetchPokemonCount()
    const response = await pokeapiFetches.fetchPokemonList(count)
    return response
})

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchPokemons.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchPokemons.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.pokemons = action.payload
            })
            .addCase(fetchPokemons.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default pokemonsSlice.reducer

export const selectAllPokemons = state => state.pokemons.pokemons

export const selectPokemonByName = (state, name) =>
    state.pokemons.pokemons.find(pokemon => pokemon.name === name)