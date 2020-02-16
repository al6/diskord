import React from "react";
import { Link } from "react-router-dom";

class GuildChannelsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchChannels, guildId } = this.props;
    fetchChannels(guildId);
  }
  render() {
    const { channels } = this.state;
    return (
      <div className="guild_channels_index">
        {/* <Link to={`/channels/${guildId}`}>General</Link> */}
        {channels.map(channel => (
          <Link to={`/channels/${guildId}/${channel.id}`}>{channel.name}</Link>
        ))}
        <a onClick={() => logout()} className="logout-button">
          Logout!
        </a>
      </div>
    );
  }
}

export default GuildChannelsIndex;
