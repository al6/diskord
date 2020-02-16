import React from "react";
import { Link } from "react-router-dom";

class GuildChannelsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(previousProps) {
    if (previousProps.guildId !== this.props.guildId) {
      this.props.fetchChannels(this.props.guildId);
    }
  }

  componentDidMount() {
    const { fetchChannels, guildId } = this.props;
    fetchChannels(guildId);
  }

  render() {
    const { channels = [], logout, guildId } = this.props;
    console.log(guildId);
    return (
      <div className="guild_channels_index">
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
