import React from 'react';
import { render } from 'react-dom';
import store from './store/configureStore';

import Root from './components/Root.jsx';

render(
  <Root store={store} />,
  document.getElementById('root')
)


// <Router history={browserHistory}>
//     <Route path="/" component={Home}>
//     </Route>
//   </Router>
