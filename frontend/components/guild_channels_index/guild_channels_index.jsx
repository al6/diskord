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
    const { channels = [], logout, guildId, guild = {} } = this.props;
    return (
      <div className="guild-channels-index">
        <a className="channel-index-link">{guild.name}</a>
        {channels.map(channel => (
          <Link
            className="channel-index-link"
            key={guildId}
            to={`/channels/${guildId}/${channel.id}`}
          >
            #{channel.name}
          </Link>
        ))}
        <a onClick={() => logout()} className="logout-button">
          Logout!
        </a>
      </div>
    );
  }
}

export default GuildChannelsIndex;
