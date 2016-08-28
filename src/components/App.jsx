import React from 'react';
import { withRouter, Link } from 'react-router';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div>
        <button type="submit">Auth with Google!</button>
        <a href="https://goo.gl/HGebD9">Go to App!</a>
        <br/>
        <Link to={ '/pokemons' }>Pokemons</Link>
        {this.props.children}
      </div>
    );
  }
}

App = withRouter(connect()(App));

export default App;
