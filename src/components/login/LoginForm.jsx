import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ errors: {}, isLoading: true });
    this.props.login(this.state).then(
      (res) => this.context.router.push('/'),
      (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
    );
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, isLoading } = this.state;

    return (
      <form onSubmit={this.onSubmit} className="form-signin">
        <h1>Login with Google</h1>

        { errors.form && <div className="alert alert-danger">{errors.form}</div> }

        <div>
          <input
            name="login"
            type="text"
            placeholder="email"
            className="form-control"
            onChange={this.onChange}
          />
          <br />
          <input
            name="password"
            type="password"
            placeholder="password"
            className="form-control"
            onChange={this.onChange}
          />
          <br />
          <div className="form-group"><button className="btn btn-primary btn-lg" disabled={isLoading}>Login</button></div>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  login: React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(null, { login })(LoginForm);
