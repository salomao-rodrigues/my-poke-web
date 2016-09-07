import * as ActionTypes from '../constants/ActionTypes';

export default function candy(state = [], action) {
  switch(action.type) {
    case ActionTypes.LOAD_PLAYER_DATA:
      return action.data.candies;
  }

  return state;
}
