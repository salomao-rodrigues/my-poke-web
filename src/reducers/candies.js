import * as ActionTypes from '../constants/ActionTypes';
import { getFamilyId, mapArrayToObject } from '../utils';
import defaultsDeep from 'lodash/defaultsdeep';

const mapCandiesToObject = candies => {
  return candies.reduce((newCandies, candy) => {
    newCandies[candy.family_id] = candy;
    return newCandies;
  }, {});
};

const pokemonReleased = (state, action) => {
  const id = getFamilyId(action.pokedexId);
  const candies = state[id] && state[id].candy || 0;

  return defaultsDeep(
    {
      [id]: {
        candy: candies + action.candies,
        family_id: id
      }
    },
    state
  );
}

export default function candy(state = {}, action) {
  switch(action.type) {
    case ActionTypes.LOAD_PLAYER_DATA:
      return mapArrayToObject(action.data.candies, 'family_id');

    case ActionTypes.POKEMON_RELEASED:
      return pokemonReleased(state, action);
  }

  return state;
}
