import { combineReducers } from 'redux';
import auth from './auth';
import candies from './candies';
import pokedex from './pokedex';
import pokemon from './pokemon';
import flashMessages from './flashMessages';

const rootReducer = combineReducers({
  auth,
  candies,
  pokedex,
  pokemon,
  flashMessages
})

export default rootReducer;
