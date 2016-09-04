import React from 'react';
import { render } from 'react-dom';
import store from './store/configureStore';
import setAuthorizationToken from './utils/setAuthorizationToken';
import { setUserToken } from './actions/auth';

import Root from './components/Root.jsx';

if (localStorage.gToken) {
  setAuthorizationToken(localStorage.gToken);
  store.dispatch(setUserToken(localStorage.gToken));
}

render(
  <Root store={store} />,
  document.getElementById('root')
)
