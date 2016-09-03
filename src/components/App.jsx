import React from 'react';
import { withRouter, Link } from 'react-router';
import { connect } from 'react-redux';

import NavigationBar from './NavigationBar.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <NavigationBar />
        {this.props.children}
      </div>
    );
  }
}

App = withRouter(connect()(App));

export default App;
