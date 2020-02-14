import React from 'react';
import { Link } from 'react-router-dom';

class GuildMembershipsIndex extends React.Component {
  render(){

    return(
      <div className="guild_memberships_index">
        <Link to={`/channels/@me`}>Home</Link>
        <Link to={`/channels/@me`}>Server1</Link>
        <Link to={`/channels/@me`}>Server2</Link>
        <Link to={`/channels/@me`}>Server3</Link>
      </div>
    )
  }
}

export default GuildMembershipsIndex;