import axios from 'axios';
import { SET_USER_TOKEN } from '../constants/ActionTypes';
import { apiUrl } from '../config';
import { loadPlayerData } from './user';
import setAuthorizationToken from '../utils/setAuthorizationToken';

export function setUserToken(token) {
  return {
    type: SET_USER_TOKEN,
    token
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('gToken');
    setAuthorizationToken(false);
    dispatch(setUserToken({}));
  }
}

export function login(data) {
  return dispatch => {
    return axios.post(apiUrl + '/api/auth/login', data).then(res => {
      const token = res.data.token;
      localStorage.setItem('gToken', token);
      setAuthorizationToken(token);
      dispatch(setUserToken(token));
      dispatch(loadPlayerData(token));
    });
  }
}
