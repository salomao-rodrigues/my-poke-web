import axios from 'axios';
import { POKEMON_RELEASED, POKEMON_EVOLVED } from '../constants/ActionTypes';
import { apiUrl } from '../config';
import { loadPlayerData } from './user';
import { addFlashMessage } from './flashMessages';
import pokedex from '../utils/pokedex.json';

const updateReleased = (pokemon, candyAwarded) => {
  return {
    type: POKEMON_RELEASED,
    pokemon,
    candyAwarded
  };
};

const updateEvolved = (pokemon, evolved, candyAwarded, experience_awarded) => {
  return {
    type: POKEMON_EVOLVED,
    pokemon,
    evolved,
    candyAwarded,
    experience_awarded
  };
}

export function release(pokemon) {
  const { name } = pokedex[pokemon.pokemon_id];

  return dispatch => {
    return axios.post(apiUrl + '/api/pokemon/release', {
      token: localStorage.getItem('gToken'),
      pokemonId: pokemon.id
    }).then(({ data }) => {
        dispatch(addFlashMessage({
            type: 'success',
            text: 'You got ' + data.candy_awarded + ' ' + name + ' candy'
          })
        );
        dispatch(updateReleased(pokemon, data.candy_awarded));
      });
  };
};

export function evolve(pokemon) {
  return dispatch => {
    return axios.post(apiUrl + '/api/pokemon/evolve', {
      token: localStorage.getItem('gToken'),
      pokemonId: pokemon.id
    }).then(({ data }) => {
      const { evolved_pokemon_data, candy_awarded, experience_awarded } = data;
        dispatch(addFlashMessage({
            type: 'success',
            text: 'You got ' + experience_awarded + 'xp and ' + candy_awarded + ' candies back'
          })
        );
        dispatch(updateEvolved(pokemon, evolved_pokemon_data, candy_awarded, experience_awarded));
      });
  };
};
