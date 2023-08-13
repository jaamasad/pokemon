import { Pokedex } from './pages/Pokedex'
import { PokemonSearch } from './pages/PokemonSearch'
import { Home } from './pages/Home'
import { BrowserRouter, Router, Route, Link, Switch } from 'react-router-dom'
import Header from './layout/Header'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className='h64' />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/pokemon-search">
            <PokemonSearch />
          </Route>
          <Route path="/pokedex">
            <Pokedex />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
