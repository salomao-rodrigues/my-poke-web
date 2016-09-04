import axios from 'axios';
import { apiUrl } from '../config';
import { LOAD_PLAYER_DATA } from '../constants/ActionTypes';

export function loadPlayerData(userToken) {
  return dispatch => {
    return axios.post(apiUrl + '/api/get-data', userToken)
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: LOAD_PLAYER_DATA,
          data: json
        });
      });
  };
};
