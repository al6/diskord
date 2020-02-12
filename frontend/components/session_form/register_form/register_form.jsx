import React from 'react';
import { Link } from 'react-router-dom';

class RegisterForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {email: '', username: '', password: ''}
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.register(this.state);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return(
      <div className="register-background-container">
        <div className="register-container">
        <h2 className="form-header">Create an account</h2>
        <form className="register-form" onSubmit={this.handleSubmit}>
          <div className="email-container">
            <div className="form-input-label">EMAIL</div>
            <input 
              className="form-input"
              type="text"
              onChange={this.update('email')}
              value={this.state.email}
            />
          </div>
          <div className="username-input-container">
            <div className="form-input-label">USERNAME</div>
            <input 
              className="form-input"
              type="text"
              onChange={this.update('username')}
              value={this.state.username}
            />
          </div>
          <div className="password-input-container">
            <div className="form-input-label">PASSWORD</div>
            <input 
              className="form-input"
              type="password" 
              onChange={this.update('password')}
              value={this.state.password}
            />
          </div>
          <button className="register-form-button">
            <div className="register-form-button-text">Register</div>
          </button>
          <div className="form-link-container">
            <Link className="form-link" to={``}>Already have an account?</Link>
          </div>
        </form>
      </div>
      </div>
    )
  }
}

export default RegisterForm;