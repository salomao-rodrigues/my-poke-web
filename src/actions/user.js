import axios from 'axios';
import { apiUrl } from '../config';
import { LOAD_PLAYER_DATA } from '../constants/ActionTypes';

export function loadPlayerData(token) {
  return dispatch => {
    return axios.post(apiUrl + '/api/user/get-data', { token })
      .then(response => {
        dispatch({
          type: LOAD_PLAYER_DATA,
          data: response.data
        });
      });
  };
};
