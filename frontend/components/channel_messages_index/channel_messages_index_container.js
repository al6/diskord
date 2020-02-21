import { connect } from "react-redux";
import ChannelMessagesIndex from "./channel_messages_index";
import {
  createMessage,
  fetchMessages,
  receiveMessage
} from "../../actions/message_actions";

let subscription;

function subscribeToChannel(channelId, dispatch) {
  if (subscription) {
    subscription = subscription.unsubscribe();
  }
  subscription = App.cable.subscriptions.create(
    { channel: "ChatChannel", channelId: channelId },
    {
      received: data => {
        dispatch(receiveMessage(data));
      }
    }
  );
}

const mapStateToProps = (state, ownProps) => {
  const { guildId, channelId } = ownProps.match.params;
  const { members, messages } = state.entities;
  const messages_with_author = messages.map(message => {
    message.author = members[message.author_id];
    return message;
  });
  const currentMemberId = state.session.id;
  const channel = state.entities.channels.find(
    channel => channel.id === Number.parseInt(channelId)
  );
  return {
    guildId: Number.parseInt(guildId),
    channelId: Number.parseInt(channelId),
    channel,
    currentMemberId,
    currentMembers: members,
    messages: messages_with_author,
    session: state.session
  };
};

const mapDispatchToProps = dispatch => {
  const subscribe = channelId => subscribeToChannel(channelId, dispatch);
  return {
    subscribe,
    createMessage: message => dispatch(createMessage(message)),
    fetchMessages: channelId => dispatch(fetchMessages(channelId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelMessagesIndex);
