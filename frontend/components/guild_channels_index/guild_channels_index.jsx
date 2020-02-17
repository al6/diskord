import React from "react";
import { Link } from "react-router-dom";
import Modal, { ModalContext } from "../modal/modal";
import CreateChannelFormContainer from "../../components/create_channel_form/create_channel_form_container";
import get from "lodash/get";

class GuildChannelsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(previousProps) {
    const { guildId } = this.props;
    if (previousProps.guildId !== guildId) {
      this.props.fetchChannels(guildId);
    }
    if (
      get(previousProps, "channels", []).length === 0 &&
      this.props.channels.length > 0
    ) {
      this.props.history.push(`${this.props.channels[0].id}`);
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
        </div>
        <div className="channels-list">
          <div className="text-channel-type">
            <span>TEXT CHANNELS</span>
            <span className="create-channel-modal">
              <Modal>
                <Modal.Content>
                  <ModalContext.Consumer>
                    {({ closeModal }) => (
                      <CreateChannelFormContainer
                        guildId={guildId}
                        closeModal={closeModal}
                      />
                    )}
                  </ModalContext.Consumer>
                </Modal.Content>
                <Modal.OpenButton className="create-channel-button">
                  <p>+</p>
                </Modal.OpenButton>
              </Modal>
            </span>
          </div>
          {channels.map(channel => (
            <Link
              className="channel-index-link"
              key={guildId}
              to={`/channels/${guildId}/${channel.id}`}
              key={`channel-${channel.id}`}
            >
              #{channel.name}
            </Link>
          ))}
        </div>
        <div className="channels-index-footer">
          <a onClick={() => logout()} className="logout-button">
            Logout!
          </a>
        </div>
      </div>
    );
  }
}

export default GuildChannelsIndex;
