import React from "react";

class ChannelMessagesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      author_id: props.ownerId
    };
    this.messagesIndex = React.createRef();
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
    if (previousProps.messages.length !== this.props.messages.length) {
      this.messagesIndex.current.scrollIntoView();
    }
  }

  render() {
    const { messages = [], channel = [] } = this.props;
    return (
      <div className="channel-messages-index">
        <div className="channel-messages-index-header">
          <div className="channel-messages-index-header-left-right">
            <div className="channel-messages-index-header-left">
              <span className="channel-messages-index-header-left-hashtag">#</span>
              <span className="channel-messages-index-header-left-channel-name">{channel.name}</span>
            </div>
          </div>
          <span></span>
        </div>
        <div className="channel-messages-index-main">
          {messages.map(message => (
            <div key={message.id}>
              <div className="message-width-container">
                <div className="message-container">
                  <div className="message-profile-picture"></div>
                  <div className="message-data">
                    <div className="message-header">
                      <span className="message-author">{message.author}</span>
                      <span className="recent-date">
                        {Date(message.created_at)
                          .split(" ")
                          .slice(0, 5)
                          .join(" ")}
                      </span>
                    </div>
                    <div className="message-body">{message.body}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div ref={this.messagesIndex}></div>
        </div>
        <div className="channel-messages-index-footer">
          <form
            className="channel-message-input-form"
            onSubmit={e => {
              this.handleSubmit(e);
              this.clearInput();
            }}
          >
            <input
              className="channel-message-input"
              value={this.state.body}
              onChange={this.update()}
              type="text"
              placeholder={`Message #${channel.name}`}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default ChannelMessagesIndex;
