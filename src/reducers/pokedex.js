import * as ActionTypes from '../constants/ActionTypes';

export default function pokedex(state = {}, action) {
  switch(action.type) {
    case ActionTypes.LOAD_PLAYER_DATA:
      return action.data.pokedex;
  }

  return state;
}
