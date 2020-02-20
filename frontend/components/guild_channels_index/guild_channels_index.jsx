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
    const { guildId, fetchGuildMembers, subscribe } = this.props;
    if (previousProps.guildId !== guildId) {
      this.props.fetchChannels(guildId);
      fetchGuildMembers(guildId);
      subscribe(guildId);
    }
    if (
      get(previousProps, "channels", []).length === 0 &&
      this.props.channels.length > 0
    ) {
      this.props.history.push(`${this.props.channels[0].id}`);
    }
  }

  componentDidMount() {
    const { fetchChannels, fetchGuildMembers, guildId, subscribe } = this.props;
    if (Number.parseInt(guildId)) {
      fetchChannels(guildId);
      fetchGuildMembers(guildId);
      subscribe(guildId);
    }
  }

  render() {
    const { channels = [], logout, guildId, guild = {} } = this.props;
    this.props;
    return (
      <div className="guild-channels-index">
        <div className="create-channel-container">
          <div className="channel-index-title">{guild.name}</div>
        </div>
        <div className="channels-list">
          <div className="text-channel-type">
            <span className="text-channel-type-text">TEXT CHANNELS</span>
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
                  <p className="create-channel-button-text">+</p>
                </Modal.OpenButton>
              </Modal>
            </span>
          </div>
          {channels.map(channel => (
            <Link
              className={`channel-index-link ${
                `${channel.id}` === this.props.match.params.channelId
                  ? "channel-index-link-active"
                  : ""
              }`}
              key={guildId}
              to={`/channels/${guildId}/${channel.id}`}
              key={`channel-${channel.id}`}
            >
              <svg
                className="channels-index-hashtag"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path
                  fill="#8e9291"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"
                ></path>
              </svg>
              <span>{channel.name}</span>
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
