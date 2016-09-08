import React from 'react';
import { withRouter, Link } from 'react-router';
import { connect } from 'react-redux';

import NavigationBar from './NavigationBar.jsx';
import FlashMessagesList from './flash/FlashMessagesList.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <NavigationBar />
        <FlashMessagesList />
        {this.props.children}
      </div>
    );
  }
}

App = withRouter(connect()(App));

export default App;
