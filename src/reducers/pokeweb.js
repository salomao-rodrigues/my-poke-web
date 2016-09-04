import * as ActionTypes from '../constants/ActionTypes';

export const getPokemons = (state) => {
  return state.pokeweb.pokemon
};

export default function pokeweb(state = {}, action) {
  switch(action.type) {
    case ActionTypes.LOAD_PLAYER_DATA:
      return action.data;
      break;
  }

  return state;
}
