import React from "react";
import { Link } from "react-router-dom";
import Modal from "../modal/modal";
import { Button } from "../button/button";

class GuildMembershipsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { guilds: [] };
  }

  componentDidMount() {
    const { fetchGuildMemberships, currentMemberId } = this.props;
    fetchGuildMemberships(currentMemberId);
  }

  handleGuildCreation(e) {
    e.preventDefault();
  }

  render() {
    const { guilds } = this.props;
    return (
      <div className="guild_memberships_index">
        <Link className="guild-membership" to={`/channels/@me`}>
          Home
        </Link>
        {guilds.map(guild => (
          <Link
            className="guild-membership"
            key={`guild-${guild.id}`}
            to={`/channels/${guild.id}/`}
          >
            {guild.name}
          </Link>
        ))}
        <Modal>
          <Modal.Content>
            <div className="guild-membership-form">
              <div className="diskord-blue guild-member-form-header">
                OH, ANOTHER SERVER HUH?
              </div>
              <div className="create-join-guild-buttons">
                <div className="create-guild-form">
                  <div className="diskord-blue">CREATE</div>
                  <div className="create-guild-instructions">
                    Create a new guild and invite your friends. It's free!
                  </div>
                  <img
                    className="create-guild-icon"
                    src={createguild}
                    alt="createguildicon"
                  />
                  <Button color="blue">Create a guild</Button>
                </div>
                {/* <div className="create-guild-divider">
                  <div className="create-join-divider-color">or</div>
                </div> */}
                {/* <div className="form-circle"></div> */}
                <div className="create-guild-form">
                  <div className="diskord-green">JOIN</div>
                  <div className="create-guild-instructions">
                    Enter a guild name and join your friend's guild.
                  </div>
                  <img
                    className="create-guild-icon"
                    src={joinguild}
                    alt="createguildicon"
                  />
                  <Button color="green">Join a guild</Button>
                </div>
              </div>
            </div>
          </Modal.Content>
          <Modal.OpenButton className="guild-membership">
            <div>+</div>
          </Modal.OpenButton>
        </Modal>
      </div>
    );
  }
}

export default GuildMembershipsIndex;
