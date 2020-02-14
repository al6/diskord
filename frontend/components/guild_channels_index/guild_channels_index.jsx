import React from 'react';
import { Link } from 'react-router-dom';

class GuildChannelsIndex extends React.Component {
  render(){

    return(
      <div className="guild_channels_index">
        <Link to={`/channels/@me`}>Announcements</Link>
        <Link to={`/channels/@me`}>General</Link>
        <Link to={`/channels/@me`}>Study</Link>
        <Link to={`/channels/@me`}>Music</Link>
      </div>
    )
  }
}

export default GuildChannelsIndex;