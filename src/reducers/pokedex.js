import * as ActionTypes from '../constants/ActionTypes';

const mapPokedexToObject = pokedex => {
  return pokedex.reduce((newPokedex, pokemon) => {
    newPokedex[pokemon.pokemon_id] = pokemon;
    return newPokedex;
  }, {});
};

export default function pokedex(state = {}, action) {
  switch(action.type) {
    case ActionTypes.LOAD_PLAYER_DATA:
      return mapPokedexToObject(action.data.pokedex);
  }

  return state;
}
