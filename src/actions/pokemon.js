import axios from 'axios';
import { apiUrl } from '../config';
import { loadPlayerData } from './user';
import { addFlashMessage } from './flashMessages';

export function release(pokemonId, pokemonName = '') {
  return dispatch => {
    return axios.post(apiUrl + '/api/pokemon/release', {
      token: localStorage.getItem('gToken'),
      pokemonId
    }).then(({ data }) => {
      //@todo: Don't call api again, just update state
        loadPlayerData(localStorage.getItem('gToken'));
        dispatch(addFlashMessage({
            type: 'success',
            text: 'You got ' + data.candy_awarded + ' ' + pokemonName + ' candy'
          })
        );
      });
  };
};

export function evolve(pokemonId, pokemonName = '') {
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
