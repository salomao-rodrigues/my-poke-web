import * as ActionTypes from '../constants/ActionTypes';

export default function pokemon(state = [], action) {
  switch(action.type) {
    case ActionTypes.LOAD_PLAYER_DATA:
      return action.data.pokemon;
  }

  return state;
}
