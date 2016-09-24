import * as ActionTypes from '../constants/ActionTypes';
import { getFamilyId, mapArrayToObject } from '../utils';
import defaultsDeep from 'lodash/defaultsdeep';
import pokedex from '../utils/pokedex.json';

const mapCandiesToObject = candies => {
  return candies.reduce((newCandies, candy) => {
    newCandies[candy.family_id] = candy;
    return newCandies;
  }, {});
};

const updateFamilyCandy = (state, family, candies) => {
  return defaultsDeep(
    {
      [family]: {
        candy: candies,
        family_id: family
      }
    },
    state
  );
};

const addCandies = (state, pokemon, candyAwarded) => {
  const id = getFamilyId(pokemon.pokemon_id);
  let candies = state[id] && state[id].candy || 0;
  candies += candyAwarded;

  return updateFamilyCandy(state, id, candies);
};

const updateCandies = (state, action) => {
  const { pokemon, evolved, candyAwarded } = action;
  const id = getFamilyId(pokemon.pokemon_id);
  const candies =
    state[id].candy // Candies before evolving
    - pokedex[pokemon.pokemon_id].candy_count // Needed to evolve
    + candyAwarded // Awarded by evolving
  ;

  return updateFamilyCandy(state, id, candies);
};

export default function candy(state = {}, action) {
  switch(action.type) {
    case ActionTypes.LOAD_PLAYER_DATA:
      return mapArrayToObject(action.data.candies, 'family_id');

    case ActionTypes.POKEMON_RELEASED:
      return addCandies(state, action.pokemon, action.candyAwarded);

    case ActionTypes.POKEMON_EVOLVED:
      return updateCandies(state, action);
  }

  return state;
}
