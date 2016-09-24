import axios from 'axios';
import { POKEMON_RELEASED } from '../constants/ActionTypes';
import { apiUrl } from '../config';
import { loadPlayerData } from './user';
import { addFlashMessage } from './flashMessages';
import pokedex from '../utils/pokedex.json';

const updateReleased = (pokemonId, pokedexId, candies) => {
  return {
    type: POKEMON_RELEASED,
    pokemonId,
    pokedexId,
    candies
  };
};

export function release(pokemonId, pokedexId) {
  const { name } = pokedex[pokedexId].name;

  return dispatch => {
    return axios.post(apiUrl + '/api/pokemon/release', {
      token: localStorage.getItem('gToken'),
      pokemonId
    }).then(({ data }) => {
        dispatch(addFlashMessage({
            type: 'success',
            text: 'You got ' + data.candy_awarded + ' ' + name + ' candy'
          })
        );
        dispatch(updateReleased(pokemonId, pokedexId, data.candy_awarded));
      });
  };
};

export function evolve(pokemonId) {
  return dispatch => {
    return axios.post(apiUrl + '/api/pokemon/evolve', {
      token: localStorage.getItem('gToken'),
      pokemonId
    }).then(({ data }) => {
        loadPlayerData(localStorage.getItem('gToken'));
        dispatch(addFlashMessage({
            type: 'success',
            text: 'You got ' + data.experience_awarded + 'xp and ' + data.candy_awarded + ' candies back'
          })
        );
      });
  };
};
