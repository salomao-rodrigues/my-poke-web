import { SET_USER_TOKEN } from '../constants/ActionTypes';

export default (state = {}, action = {}) => {
  switch(action.type) {
    case SET_USER_TOKEN:
      return {
        token: action.token,
      };

    default: return state;
  }
}
