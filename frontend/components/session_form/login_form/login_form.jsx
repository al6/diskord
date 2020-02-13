import React from 'react';
import { Link } from 'react-router-dom';
import { demologin } from '../../../actions/session_actions';

class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {email: '', password: ''}
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    const {responseJSON} = this.props.errors
    if(responseJSON) {
      errors = responseJSON.map(error => `${error}`)
    }
    debugger
    return(
      <div className="session-page">
        <div className="login-container">
          <div className="form-top">
            <div className="form-header">Welcome back!</div>
            <div className="excited">We're so excited to see you again!</div>
          </div>
          <form className="login-form" onSubmit={this.handleSubmit}>
            <div className="email-container">
              <div className="input-label-and-errors">
                <div className={ responseJSON ? "errors-form-input-label" : "form-input-label"}>EMAIL</div>
                <div className="login-error">{...errors}</div>
              </div>
              <input 
                className={ responseJSON ? "error-form-input" : "form-input" }
                type="text"
                onChange={this.update('email')}
                value={this.state.email}
              />
            </div>
            <div className="password-container">
              <div className={ responseJSON ? "errors-form-input-label" : "form-input-label"}>PASSWORD</div>
              <input 
                className={ responseJSON ? "error-form-input" : "form-input" }
                type="password" 
                onChange={this.update('password')}
                value={this.state.password}
              />
            </div>
            <div className="form-link-container">
              <Link className="form-link" onClick={() => demologin()} to={`/channels/@me`}>Forgot your password? Try the demo instead.</Link>
            </div>
            <button className="login-form-button">
              <div className="login-form-button-text">Login</div>
            </button>
            <div className="form-link-container">
              <div className="register-link-helper">
                Need an account?
              </div> 
              <Link className="form-link" to={`/register`}>Register</Link>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm;