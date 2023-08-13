import { render, screen,waitFor, fireEvent } from '@testing-library/react'

import {PokemonSearch} from './pages/PokemonSearch'
import { Home } from './pages/Home';

import { PokemonInfoCard } from './components/PokemonInfoCard';

test('it renders learn react link', () => {
  render(<PokemonSearch />)
  const linkElement = screen.getByText(/Find your Pokemon/i)
  expect(linkElement).toBeInTheDocument()
})
// home page 
test('renders welcome message and button', () => {
  const { getByText } = render(<Home />);

  const welcomeMessage = getByText(/Welcome to the Pokémon World/i);
  const discoverMessage = getByText(/Discover the fascinating world of Pokémon/i);
  const getStartedButton = getByText(/Get Started/i);

  expect(welcomeMessage).toBeInTheDocument();
  expect(discoverMessage).toBeInTheDocument();
  expect(getStartedButton).toBeInTheDocument();
});


