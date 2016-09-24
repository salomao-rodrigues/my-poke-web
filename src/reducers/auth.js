import { SET_USER_TOKEN } from '../constants/ActionTypes';
import isEmpty from 'lodash/isEmpty';

export default (state = {}, action = {}) => {
  switch(action.type) {
    case SET_USER_TOKEN:
      return {
        token: action.token,
      };

    default: return state;
  }
}
