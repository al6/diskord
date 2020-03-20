import React from "react";
import get from "lodash/get";
class DmChannelMessagesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      author_id: props.currentMemberId
    };
    this.messagesIndex = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("message[body]", this.state.body);
    formData.append("message[author_id]", this.props.currentMemberId);
    formData.append("message[channel_id]", this.props.channelId);
    if (this.state.photoFile) {
      formData.append("message[image]", this.state.photoFile);
    }
    this.props.createMessage(formData);
    this.setState({ imageUrl: "", photoFile: null });
  }

  handleUpload(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({
        imageUrl: reader.result,
        photoFile: file
      });
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", photoFile: null });
    }
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
    const { messages = [], channel = { name: "" } } = this.props;
    return (
      <div className="channel-messages-index">
        <div className="channel-messages-index-header">
          <div className="channel-messages-index-header-left-right">
            <div className="channel-messages-index-header-left">
              <span className="channel-messages-index-header-left-hashtag">
                <svg
                  x="0"
                  y="0"
                  className="icon-22AiRD"
                  aria-hidden="false"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.486 2 2 6.486 2 12C2 17.515 6.486 22 12 22C14.039 22 15.993 21.398 17.652 20.259L16.521 18.611C15.195 19.519 13.633 20 12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12V12.782C20 14.17 19.402 15 18.4 15L18.398 15.018C18.338 15.005 18.273 15 18.209 15H18C17.437 15 16.6 14.182 16.6 13.631V12C16.6 9.464 14.537 7.4 12 7.4C9.463 7.4 7.4 9.463 7.4 12C7.4 14.537 9.463 16.6 12 16.6C13.234 16.6 14.35 16.106 15.177 15.313C15.826 16.269 16.93 17 18 17L18.002 16.981C18.064 16.994 18.129 17 18.195 17H18.4C20.552 17 22 15.306 22 12.782V12C22 6.486 17.514 2 12 2ZM12 14.599C10.566 14.599 9.4 13.433 9.4 11.999C9.4 10.565 10.566 9.399 12 9.399C13.434 9.399 14.6 10.565 14.6 11.999C14.6 13.433 13.434 14.599 12 14.599Z"
                  ></path>
                </svg>
              </span>
              <span className="channel-messages-index-header-left-channel-name">
                {channel.name}
              </span>
            </div>
          </div>
          <span></span>
        </div>
        <div className="channel-messages-index-main">
          <div className="welcome-to-dm-container">
            {/* second member avatar image */}
            <div className="welcome-to-dm-channel">
              This is the beginning of your direct message history with @
              <div className="bold-white">{channel.name}</div>.
            </div>
          </div>
          {messages.map((message, idx) => {
            return (
              <div className="message-index-width" key={idx}>
                <div className="message-width-container">
                  <div className="message-container">
                    <div className="message-profile-picture">
                      <img
                        className="placeholder-logo-messages"
                        src="https://diskord-pro.s3.amazonaws.com/white-logo-no-words.png"
                      />
                    </div>
                    <div className="message-data">
                      <div className="message-header">
                        <span className="message-author">
                          {get(message, "username", "")}
                        </span>
                        <span className="recent-date">
                          {new Date(Date.parse(message.created_at))
                            .toString()
                            .split(" ")
                            .slice(0, 5)
                            .join(" ")}
                        </span>
                      </div>
                      <div className="message-body">
                        {message.body.split(" ").map(word => {
                          if (word.slice(0, 8) === "https://") {
                            return (
                              <a className="embedded-message-link" href={word}>
                                {word + " "}
                              </a>
                            );
                          } else {
                            return word + " ";
                          }
                        })}{" "}
                      </div>
                      <img className="message-image" src={message.image} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
            <label className="message-image-upload">
              +
              <input type="file" onChange={this.handleUpload} />
            </label>

            <input
              className="channel-message-input"
              value={this.state.body}
              onChange={this.update()}
              type="text"
              placeholder={`Message @${channel.name}`}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default DmChannelMessagesIndex;
