import axios from 'axios';
import { apiUrl } from '../config';
import { LOAD_PLAYER_DATA } from '../constants/ActionTypes';
import { loadPlayerData } from './user';

export function release(pokemonId) {
  return dispatch => {
    return axios.post(apiUrl + '/api/pokemon/release', {
      token: localStorage.getItem('gToken'),
      pokemonId
    }).then(response => {
      //@todo: Don't call api again, just update state
        loadPlayerData(localStorage.getItem('gToken'));
      });
  };
};
