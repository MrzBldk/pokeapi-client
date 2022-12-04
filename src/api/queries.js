const getPokemonCountQuery = `query pokemons {
    pokemons {
      count
    }
  }`

const getPokemonListQuery = `query getPokemonList($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        id
        name
        image
      }
    }
  }`

const getPokemonInfoQuery = `query getPokemonInfo($name: String!) {
    pokemon(name: $name) {
      name
      weight
      height
      sprites {
        front_default
        back_default
      }
      types {
        type {
          name
        }
      }
      stats {
        stat {
          name
        }
        base_stat
      }
    }
  }`

export { getPokemonCountQuery, getPokemonListQuery, getPokemonInfoQuery }