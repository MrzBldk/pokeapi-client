import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { fetchPokemonList, fetchPokemonCount } from '../../api/fetches'

const initialState = {
    pokemons: [],
    status: 'idle',
    error: null
}

export const fetchPokemons = createAsyncThunk('pokemons/fetchPokemons', async () => {
    const count = await fetchPokemonCount()
    const response = await fetchPokemonList(count)
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