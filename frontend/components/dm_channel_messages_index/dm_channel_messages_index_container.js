import { connect } from "react-redux";
import DmChannelMessagesIndex from "./dm_channel_messages_index";
import {
  createMessage,
  fetchMessages,
  receiveMessage
} from "../../actions/message_actions";

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => {
  const subscribe = channelId => subscribeToChannel(channelId, dispatch);
  return {
    subscribe,
    createMessage: message => dispatch(createMessage(message)),
    fetchMessages: channelId => dispatch(fetchMessages(channelId))
  };
};

export default connect(null, mapDispatchToProps)(DmChannelMessagesIndex);
