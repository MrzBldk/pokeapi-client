import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import {PokemonsList} from './features/pokemons/PokemonsList'
import {PokemonInfo} from './features/pokemons/PokemonInfo'

function App() {
  return (
    <Router>
      <Navbar />
      <div className='App'>
        <Switch>
          <Route exact path='/' component={PokemonsList} />
          <Route exact path='/pokemons/:name' component={PokemonInfo}/>
          <Redirect to='/' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
