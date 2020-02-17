import React from "react";

class ChannelMessagesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      author_id: props.ownerId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const payload = { ...this.state, channel_id: this.props.channelId };
    this.props.createMessage(payload);
  }

  update() {
    return e => this.setState({ body: e.currentTarget.value });
  }

  clearInput() {
    this.setState({ body: "" });
  }

  componentDidMount() {
    this.props.fetchMessages(this.props.channelId);
    if (Number.isInteger(this.props.channelId)) {
      this.props.subscribe(this.props.channelId);
    }
  }

  componentDidUpdate(previousProps) {
    if (previousProps.channelId !== this.props.channelId) {
      this.props.fetchMessages(this.props.channelId);
      this.props.subscribe(this.props.channelId);
    }
  }

  render() {
    const { messages = [] } = this.props;
    return (
      <div className="channel-messages-index">
        <div className="channel-messages-index-header">
          <span>header left</span>
          <span>header right</span>
        </div>
        <div className="channel-messages-index-main">
          {messages.map(message => (
            <div key={message.id}>{message.body}</div>
          ))}
        </div>
        <div className="channel-messages-index-footer">
          <form
            onSubmit={e => {
              this.handleSubmit(e);
              this.clearInput();
            }}
          >
            <input
              className="message-body"
              value={this.state.body}
              onChange={this.update()}
              type="text"
              placeholder="Message #general"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default ChannelMessagesIndex;
