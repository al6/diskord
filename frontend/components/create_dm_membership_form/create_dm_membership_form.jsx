import React from "react";
import { Button } from "../button/button";

class CreateDmMembershipForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreateChannel = this.handleCreateChannel.bind(this);
    this.update = this.update.bind(this);
    this.state = {
      channel_id: null,
      first_member_id: this.props.currentMemberId,
      second_member_id: null
    };
  }

  componentDidUpdate(previousProps) {
    if (previousProps.channels !== this.props.channels) {
      this.props.closeModal();
    }
  }

  handleCreateChannel(e) {
    e.preventDefault();
    this.props.createDmMembership(this.state);
  }

  update() {
    return e => this.setState({ name: e.currentTarget.value });
  }

  render() {
    const { closeModal } = this.props;
    return (
      <div className="create-channel-form">
        <div className="create-channel-form-headers">
          <div className="create-channel-form-header-main">
            SEARCH FOR USERNAME
          </div>
          <div className="create-channel-form-header-sub">
            Note: Case sensitive
          </div>
        </div>
        <div className="channel-form-input-container">
          <div className="form-input-label">Username to send message to</div>
          <input
            value={this.state.name}
            onChange={this.update()}
            type="text"
            className="form-input"
          />
        </div>
        <div className="channel-form-input-container">
          <div className="form-input-label">Message</div>
          <input
            value={this.state.name}
            onChange={this.update()}
            type="text"
            className="form-input"
          />
        </div>
        <div className="channel-privacy">
          Direct Messages are public for now so be careful!
        </div>
        <div className="channel-form-footer">
          <div className="channel-form-buttons-container">
            <Button onClick={() => closeModal()} color="green">
              Cancel
            </Button>
            <Button
              onClick={e => {
                this.handleCreateChannel(e);
              }}
              color="blue"
            >
              Send Message
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateDmMembershipForm;
