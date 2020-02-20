import React from "react";
import { Link } from "react-router-dom";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.register(this.state).then(() => this.props.removeErrors());
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    const { removeErrors } = this.props;
    let responseJSON = Object.values(this.props.errors);
    let emailErr, usernameErr, passwordErr;
    if (
      responseJSON[0] == "This field is required" &&
      responseJSON[1] == "This field is required" &&
      responseJSON[2] == "This field is required"
    ) {
      emailErr = responseJSON[0];
      usernameErr = responseJSON[1];
      passwordErr = responseJSON[2];
    }
    if (responseJSON && responseJSON[0] !== "This field is required") {
      responseJSON.forEach(error => {
        let words = error.split(" ");
        if (words.includes("Email")) {
          emailErr = error;
        } else if (words.includes("Username")) {
          usernameErr = error;
        } else if (words.includes("Password")) {
          passwordErr = error;
        }
      });
    }
    return (
      <div className="session-page">
        <div className="register-container">
          <h2 className="form-header">Create an account</h2>
          <form className="register-form" onSubmit={this.handleSubmit}>
            <div className="email-container">
              <div className="input-label-and-errors">
                <div
                  className={
                    emailErr ? "errors-form-input-label" : "form-input-label"
                  }
                >
                  EMAIL
                </div>
                <div className="login-error">{emailErr}</div>
              </div>
              <input
                className={emailErr ? "error-form-input" : "form-input"}
                type="email"
                onChange={this.update("email")}
                value={this.state.email}
              />
            </div>
            <div className="username-input-container">
              <div className="input-label-and-errors">
                <div
                  className={
                    usernameErr ? "errors-form-input-label" : "form-input-label"
                  }
                >
                  USERNAME
                </div>
                <div className="login-error">{usernameErr}</div>
              </div>
              <input
                className={usernameErr ? "error-form-input" : "form-input"}
                type="text"
                onChange={this.update("username")}
                value={this.state.username}
              />
            </div>
            <div className="password-container">
              <div className="input-label-and-errors">
                <div
                  className={
                    passwordErr ? "errors-form-input-label" : "form-input-label"
                  }
                >
                  PASSWORD
                </div>
                <div className="login-error">{passwordErr}</div>
              </div>
              <input
                className={passwordErr ? "error-form-input" : "form-input"}
                type="password"
                onChange={this.update("password")}
                value={this.state.password}
              />
            </div>
            <button className="register-form-button">
              <div className="register-form-button-text">Register</div>
            </button>
            <div className="form-link-container">
              <Link
                className="form-link"
                to={`/login`}
                onClick={() => removeErrors()}
              >
                Already have an account?
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
