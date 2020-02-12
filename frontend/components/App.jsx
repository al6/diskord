import React from "react";
import AppButton from "./app_button/app_button";
import RegisterFormContainer from '../components/session_form/register_form/register_form_container';
import LoginFormContainer from '../components/session_form/login_form/login_form_container';
const App = () => (
  <div className="app-container">
    <LoginFormContainer/>
  </div>
);

export default App;
