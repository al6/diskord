import { connect } from "react-redux";
import ChannelMessagesIndex from "./channel_messages_index";
import { createMessage, fetchMessages } from "../../actions/message_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    ownerId: state.session.id,
    guildId: Number.parseInt(ownProps.match.params.guildId),
    channelId: Number.parseInt(ownProps.match.params.channelId),
    currentMemberId: state.session.id,
    messages: state.entities.messages
  };
};

const mapDispatchToProps = dispatch => ({
  createMessage: message => dispatch(createMessage(message)),
  fetchMessages: channelId => dispatch(fetchMessages(channelId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelMessagesIndex);
