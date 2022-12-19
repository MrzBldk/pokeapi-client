import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from 'app/Navbar'
import {PokemonsList} from 'features/pokemons/PokemonsList'
import {PokemonInfo} from 'features/pokemons/PokemonInfo'
import {MyPokemonsList} from 'features/pokemons/MyPokemonsList'
import { Footer } from 'app/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='App'>
        <Switch>
          <Route exact path='/' component={PokemonsList} />
          <Route exact path='/pokemons/:name' component={PokemonInfo}/>
          <Route exact path='/owned' component={MyPokemonsList}/>
          <Redirect to='/' />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
