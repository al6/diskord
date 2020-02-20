import { connect } from "react-redux";
import GuildMembersIndex from "./guild_members_index";
import {
  createMessage,
  fetchMessages,
  receiveMessage
} from "../../actions/message_actions";

const mapStateToProps = (state, ownProps) => {
  const { guildId, channelId } = ownProps.match.params;
  const { members, messages } = state.entities;
  const currentMemberId = state.session.id;
  const channel = state.entities.channels.find(
    channel => channel.id === Number.parseInt(channelId)
  );
  return {
    guildId: Number.parseInt(guildId),
    channelId: Number.parseInt(channelId),
    channel,
    currentMemberId,
    currentMember: members[currentMemberId].username,
    messages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createMessage: message => dispatch(createMessage(message)),
    fetchMessages: channelId => dispatch(fetchMessages(channelId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GuildMembersIndex);
