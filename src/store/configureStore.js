import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { enableBatching } from 'redux-batched-actions';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger();

const store = createStore(
  enableBatching(rootReducer),
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

export default store
