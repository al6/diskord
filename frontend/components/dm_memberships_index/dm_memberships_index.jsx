import React from "react";
import { Link } from "react-router-dom";
import Modal, { ModalContext } from "../modal/modal";
import get from "lodash/get";
import CreateDmMembershipFormContainer from "../create_dm_membership_form/create_dm_membership_form_container";
class DmMembershipsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(previousProps) {
    const { dms, fetchDmMemberships } = this.props;
    if (previousProps.dms.length !== dms.length) {
      fetchDmMemberships();
    }
    if (get(previousProps, "dms", []).length === 0 && dms.length > 0) {
      this.props.history.push(`/channels/@me/${dms[0].id}`);
    }
  }

  componentDidMount() {
    const { fetchDmMemberships, subscribe, currentMemberId } = this.props;
    fetchDmMemberships();
    subscribe(currentMemberId);
  }

  render() {
    const { logout, currentUsername, currentMemberId, dms = [] } = this.props;
    return (
      <div className="guild-channels-index">
        <div className="create-channel-container">
          <div className="channel-index-title"></div>
        </div>
        <div className="channels-list">
          <div className="text-channel-type">
            <span className="text-channel-type-text">DIRECT MESSAGES</span>
            <span className="create-channel-modal">
              <Modal>
                <Modal.Content>
                  <ModalContext.Consumer>
                    {({ closeModal }) => (
                      <CreateDmMembershipFormContainer
                        // memberId={memberId}
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
          {dms.map(channel => (
            <Link
              className={`dm-index-link ${
                `${channel ? channel.id : null}` ===
                this.props.match.params.channelId
                  ? "channel-index-link-active"
                  : ""
              }`}
              key={`channel-${channel ? channel.id : null}`}
              to={channel ? `/channels/@me/${channel.id}` : `/channels/@me/`}
            >
              <div className="avatar-background">
                <img
                  className="avatar-placeholder"
                  src="https://diskord-pro.s3.amazonaws.com/white-logo-no-words.png"
                />
              </div>
              <span
                className={
                  `${channel ? channel.id : null}` ===
                  this.props.match.params.channelId
                    ? `channel-name`
                    : ""
                }
              >
                {channel ? channel.name : null}
              </span>
            </Link>
          ))}
        </div>
        <div className="channels-index-footer">
          <div className="channels-index-footer-member-info">
            <div className="guild-members-index-member-profile-picture">
              <img
                className="small-logo-placeholder"
                src="https://diskord-pro.s3.amazonaws.com/white-logo-no-words.png"
              />
            </div>
            <div className="channels-index-footer-name-id-container">
              <div className="channels-index-footer-member-username">
                {currentUsername}
              </div>
              <div className="channels-index-footer-member-id">
                #{currentMemberId}
              </div>
            </div>
          </div>
          <a onClick={() => logout()} className="logout-button">
            Logout
          </a>
        </div>
      </div>
    );
  }
}

export default DmMembershipsIndex;
