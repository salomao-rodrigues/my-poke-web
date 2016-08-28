import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router';

import App from './App.jsx';
import Pokemons from './Pokemons.jsx';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='pokemons' component={Pokemons} />
      </Route>
    </Router>
  </Provider>
);

export default Root;
