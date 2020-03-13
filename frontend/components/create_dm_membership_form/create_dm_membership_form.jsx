import React from "react";
import { Button } from "../button/button";

class CreateDmMembershipForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreateChannel = this.handleCreateChannel.bind(this);
    this.update = this.update.bind(this);
    this.state = {
      second_member_email: "",
      body: ""
    };
  }

  componentDidUpdate(previousProps) {
    if (previousProps.dms !== this.props.dms) {
      this.props.history.push(
        `/channels/@me/${this.props.dms[this.props.dms.length - 1].id}`
      );
      this.props.closeModal();
    }
  }

  handleCreateChannel(e) {
    e.preventDefault();
    this.props.createDmMembership(this.state);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    const { closeModal } = this.props;
    return (
      <div className="create-channel-form">
        <div className="create-channel-form-headers">
          <div className="create-channel-form-header-main">
            SEARCH FOR MEMBER BY EMAIL
          </div>
          <div className="create-channel-form-header-sub">
            Note: Case sensitive
          </div>
        </div>
        <div className="channel-form-input-container">
          <div className="form-input-label">
            Email of member to send message to. Try albert@a.com or tjfan@a.com.
          </div>
          <input
            value={this.state.second_member_email}
            onChange={this.update("second_member_email")}
            type="email"
            className="form-input"
          />
        </div>
        <div className="channel-form-input-container">
          <div className="form-input-label">Message</div>
          <input
            value={this.state.body}
            onChange={this.update("body")}
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
