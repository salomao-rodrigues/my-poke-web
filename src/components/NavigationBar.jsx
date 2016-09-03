import React from 'react';
import { Link } from 'react-router';  
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import { logout } from '../actions/auth';

class NavigationBar extends React.Component {
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const { isAuthenticated } = this.props;

    const userLinks = (
      <div>
        <ul className="nav navbar-nav">
          <li><Link to="/pokemons" className="navbar-brand">Pokemons</Link></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
        </ul>
      </div>
    );

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">My Poke Web</Link>
          </div>

          <div className="collapse navbar-collapse">
            { isAuthenticated && userLinks }
          </div>
        </div>
      </nav>
    );
  }
};

function mapStateToProps(state) {
  console.log(state);
  return {
    isAuthenticated: !isEmpty(state.auth.token)
  };
}

export default connect(mapStateToProps, { logout })(NavigationBar);
