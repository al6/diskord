import React from "react";
import { Link } from "react-router-dom";
import Modal, { ModalContext } from "../modal/modal";

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
        <div className="create-channel-container">
          <div className="channel-index-title">{guild.name}</div>
          <div>
            <button>c</button>
          </div>
        </div>
        <div className="channels-list">
          {channels.map(channel => (
            <Link
              className="channel-index-link"
              key={guildId}
              to={`/channels/${guildId}/${channel.id}`}
            >
              #{channel.name}
            </Link>
          ))}
        </div>
        <a onClick={() => logout()} className="logout-button">
          Logout!
        </a>
      </div>
    );
  }
}

export default GuildChannelsIndex;
