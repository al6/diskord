import React from "react";
import RegisterFormContainer from "../components/session_form/register_form/register_form_container";
import LoginFormContainer from "../components/session_form/login_form/login_form_container";
import SplashContainer from "../components/splash/splash_container";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import GuildMembershipsIndexContainer from "../components/guild_memberships_index/guild_memberships_index_container";
import GuildChannelsIndexContainer from "./guild_channels_index/guild_channels_index_container";
import ChannelMessagesIndexContainer from "./channel_messages_index/channel_messages_index_container";
import GuildMembersIndexContainer from "./guild_members_index/guild_members_index_container";
const App = () => (
  <div className="app-container">
    <ProtectedRoute
      path="/channels/:guildId/"
      component={GuildMembershipsIndexContainer}
    />
    <ProtectedRoute
      exact
      path="/channels/@me/"
      component={props => {
        return (
          <div>
            <div className="guild-channels-index">
              <div>top</div>
              <div>dm memberships index container</div>
              <div>footer</div>
            </div>
            <div className="">
              <div>top</div>
              <div>dm messages index container</div>
              <div>footer</div>
            </div>
          </div>
        );
      }}
    />
    <ProtectedRoute
      path="/channels/:guildId/:channelId"
      component={props => {
        if (props.match.params.guildId === "@me") {
          return (
            <div>
              <div className="guild-channels-index">
                <div>top</div>
                <div>dm memberships index container</div>
                <div>footer</div>
              </div>
            </div>
          );
        }
        return <GuildChannelsIndexContainer {...props} />;
      }}
    />

    <ProtectedRoute
      path="/channels/:guildId/:channelId"
      component={ChannelMessagesIndexContainer}
    />
    <ProtectedRoute
      path="/channels/:guildId/:channelId"
      // component={GuildMembersIndexContainer}
      component={props => {
        if (props.match.params.guildId === "@me") {
          return <div></div>;
        }
        return <GuildMembersIndexContainer {...props} />;
      }}
    />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/register" component={RegisterFormContainer} />
      <Route exact path="/" component={SplashContainer} />
    </Switch>
  </div>
);

export default App;
