import pokemonsReducer from './PokemonsList'

describe('pokemons reducer', () => {
    it('should have initial value', () => {
        expect(pokemonsReducer(undefined, { type: 'unknown' })).toEqual({
            pokemons: [],
            status: 'idle',
            error: null
        })
    })
})