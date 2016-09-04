import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App.jsx';
import LoginPage from './login/LoginPage';
import Pokemons from './Pokemons.jsx';

import requireAuth from '../utils/requireAuth';


const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={requireAuth(Pokemons)} />
        <Route path='login' component={LoginPage} />
        <Route path='pokemons' component={requireAuth(Pokemons)} />
      </Route>
    </Router>
  </Provider>
);

export default Root;
