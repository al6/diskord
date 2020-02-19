import React from "react";
import { Button } from "../button/button";

class CreateChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreateChannel = this.handleCreateChannel.bind(this);
    this.update = this.update.bind(this);
    this.state = {
      name: "",
      guild_id: Number.parseInt(props.guildId)
    };
  }

  handleCreateChannel(e) {
    e.preventDefault();
    this.props.createChannel(this.state);
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
            CREATE TEXT CHANNEL
          </div>
          <div className="create-channel-form-header-sub">in Text Channels</div>
        </div>
        <div className="channel-form-input-container">
          <div className="form-input-label">CHANNEL NAME</div>
          <input
            value={this.state.name}
            onChange={this.update()}
            type="text"
            className="form-input"
          />
        </div>
        <div className="channel-privacy">
          Channels are public for now so be careful!
        </div>
        <div className="channel-form-footer">
          <div className="channel-form-buttons-container">
            <Button onClick={() => closeModal()} color="green">
              Cancel
            </Button>
            <Button
              onClick={e => {
                this.handleCreateChannel(e);
                closeModal();
              }}
              color="blue"
            >
              Create Channel
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateChannelForm;
