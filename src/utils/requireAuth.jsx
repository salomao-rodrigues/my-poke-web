import React from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { addFlashMessage } from '../actions/flashMessages';

export default function(ComposedComponent) {
  class Authenticate extends React.Component {
    componentWillMount() {
      if (isEmpty(this.props.token)) {
        this.props.addFlashMessage({
          type: 'error',
          text: 'You need to login to access this page'
        });
        this.context.router.push('/login');
      }
    }

    componentWillUpdate(nextProps) {
      if (isEmpty(nextProps.token)) {
        this.context.router.push('/login');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  Authenticate.contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  function mapStateToProps(state) {
    return {
      token: state.auth.token
    };
  }

  return connect(mapStateToProps, { addFlashMessage })(Authenticate);
}
