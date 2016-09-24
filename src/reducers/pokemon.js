import * as ActionTypes from '../constants/ActionTypes';
import { mapArrayToObject } from '../utils';
import omit from 'lodash/omit';

export default function pokemon(state = {}, action) {
  switch(action.type) {
    case ActionTypes.LOAD_PLAYER_DATA:
      return mapArrayToObject(action.data.pokemon, 'id');

    case ActionTypes.POKEMON_RELEASED:
      return omit(state, action.pokemonId);
  }

  return state;
}
