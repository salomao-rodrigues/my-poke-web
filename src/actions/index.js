import fetch from 'isomorphic-fetch'
import { LOAD_PLAYER_DATA } from '../constants/ActionTypes';

export function loadPlayerData(apiUrl) {
  return dispatch => {
    return fetch(apiUrl + '/get-data')
      .then(response => response.json())
      .then(json => {
        console.log('got stuff!', json);
        dispatch({
          type: LOAD_PLAYER_DATA,
          data: json
        });
      });
  };
};
