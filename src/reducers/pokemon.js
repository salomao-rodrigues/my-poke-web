import * as ActionTypes from '../constants/ActionTypes';
import { mapArrayToObject } from '../utils';
import omit from 'lodash/omit';
import defaultsDeep from 'lodash/defaultsdeep';

export default function pokemon(state = {}, action) {
  switch(action.type) {
    case ActionTypes.LOAD_PLAYER_DATA:
      return mapArrayToObject(action.data.pokemon, 'id');

    case ActionTypes.POKEMON_RELEASED:
      return omit(state, action.pokemon.id);

    case ActionTypes.POKEMON_EVOLVED:
      const { pokemon, evolved } = action;

      return omit(
        defaultsDeep({ [evolved.id]: evolved }, state),
        pokemon.id
      );
  }

  return state;
}
