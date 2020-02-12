import React from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter, Switch } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form/login_form_container';
import RegisterFormContainer from './session_form/register_form/register_form_container';
import SplashContainer from './splash/splash_container';
import App from './App';
const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>
);

export default Root;