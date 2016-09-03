import { SET_USER_TOKEN } from '../constants/ActionTypes';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  token: null
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_USER_TOKEN:
      return {
        token: action.token,
      };

    default: return state;
  }
}
