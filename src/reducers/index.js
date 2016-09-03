import { combineReducers } from 'redux';
import auth from './auth';
import pokeweb from './pokeweb';

const rootReducer = combineReducers({
  auth,
  pokeweb
})

export default rootReducer;
