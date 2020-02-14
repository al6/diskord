import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class GuildChannelsIndex extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    const {logout} = this.props;
    return(
      <div className="guild_channels_index">
        <Link to={`/channels/@me`}>Announcements</Link>
        <Link to={`/channels/@me`}>General</Link>
        <Link to={`/channels/@me`}>Study</Link>
        <Link to={`/channels/@me`}>Music</Link>
        <Link to={`/`} onClick={() => logout()} className="logout-button">Logout!</Link>
      </div>
    )
  }
}

export default GuildChannelsIndex;