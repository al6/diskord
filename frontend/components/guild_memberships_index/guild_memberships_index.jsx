import React from "react";
import { Link } from "react-router-dom";
import Modal, { ModalContext } from "../modal/modal";
import CreateGuildFormContainer from "../guild_forms/create_guild_form/create_guild_form_container";
import get from "lodash/get";
class GuildMembershipsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { guilds: [] };
  }

  componentDidMount() {
    const { fetchGuildMemberships, currentMemberId } = this.props;
    fetchGuildMemberships(currentMemberId);
  }

  render() {
    const { guilds } = this.props;
    return (
      <div className="guild_memberships_index">
        <Link
          className={`guild-membership ${
            this.props.match.params.guildId === `@me` ? "guild-link-active" : ""
          }`}
          to={`/channels/@me`}
        >
          <img
            className="placeholder-logo-home"
            src="https://diskord-pro.s3.amazonaws.com/white-logo-no-words.png"
          />
        </Link>
        {guilds.map(guild => (
          <Link
            className={`guild-membership guild-index-name ${
              this.props.match.params.guildId === `${guild.id}`
                ? "guild-link-active"
                : ""
            }`}
            key={`guild-${guild.id}`}
            to={`/channels/${guild.id}/${guild.initial_channel}`}
          >
            {guild.emblem ? (
              <img className="guild-emblem" src={guild.emblem} />
            ) : (
              get(guild, "name", "")
                .toUpperCase()
                .split(" ")
                .map(word => word[0])
                .join("")
            )}
          </Link>
        ))}
        <Modal>
          <Modal.Content>
            <ModalContext.Consumer>
              {({ closeModal }) => (
                <CreateGuildFormContainer closeModal={closeModal} />
              )}
            </ModalContext.Consumer>
          </Modal.Content>
          <Modal.OpenButton className="guild-membership hover-green-transition">
            <span className="open-guild-form-modal-text">+</span>
          </Modal.OpenButton>
        </Modal>
      </div>
    );
  }
}

export default GuildMembershipsIndex;
