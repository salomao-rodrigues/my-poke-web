import * as ActionTypes from '../constants/ActionTypes';

export const getPokemons = (state) => state.pokeweb.pokemon;

const pokeweb = (state = {}, action) => {
  switch(action.type) {
    case ActionTypes.LOAD_PLAYER_DATA:
      return action.data;
      break;
  }

  return state;
};

export default pokeweb
