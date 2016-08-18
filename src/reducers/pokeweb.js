import services from '../services';

const newState = {
  pokemons: [
    {
      id: 1,
      name: 'Bulbasaur'
    },
    {
      id: 2,
      name: 'Charmander'
    }
  ]
};

const pokeweb = (state = newState, action) => {
  return state;
};

export default pokeweb
