import React from "react";
import RegisterFormContainer from '../components/session_form/register_form/register_form_container';
import LoginFormContainer from '../components/session_form/login_form/login_form_container';
import SplashContainer from '../components/splash/splash_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import GuildMembershipsIndexContainer from '../components/guild_memberships_index/guild_memberships_index_container';
const App = () => (
  <div className="app-container">
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/register" component={RegisterFormContainer} />
      <ProtectedRoute path="/channels/" component={GuildMembershipsIndexContainer}/>
      <Route exact path="/" component={SplashContainer}/>
    </Switch>
  </div>
);

export default App;