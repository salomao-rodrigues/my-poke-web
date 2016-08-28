import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { loadPlayerData } from '../actions';
import config from '../config';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

store.dispatch(loadPlayerData(config.apiUrl)).then(() =>
  console.log(store.getState())
)

export default store
