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
        // console.log("live update", data);
        dispatch(receiveMessage(data));
      }
    }
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    ownerId: state.session.id,
    guildId: Number.parseInt(ownProps.match.params.guildId),
    channelId: Number.parseInt(ownProps.match.params.channelId),
    currentMemberId: state.session.id,
    messages: state.entities.messages
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
