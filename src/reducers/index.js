import { combineReducers } from 'redux';
import auth from './auth';
import candies from './candies';
import pokedex from './pokedex';
import pokemon from './pokemon';

const rootReducer = combineReducers({
  auth,
  candies,
  pokedex,
  pokemon
})

export default rootReducer;
