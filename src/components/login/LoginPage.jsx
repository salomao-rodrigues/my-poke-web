import React from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import LoginForm from './LoginForm';

class LoginPage extends React.Component {
  componentWillMount() {
    this.props.isAuthenticated && this.context.router.push('/');
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <LoginForm />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !isEmpty(state.auth.token)
  };
}

export default connect(mapStateToProps)(LoginPage);
