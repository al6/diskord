import { connect } from "react-redux";
import GuildMembersIndex from "./guild_members_index";
import { createMessage, fetchMessages } from "../../actions/message_actions";
import orderBy from "lodash/orderBy";

const mapStateToProps = (state, ownProps) => {
  const { guildId, channelId } = ownProps.match.params;
  const { members, messages } = state.entities;
  const currentMemberId = state.session.id;
  const channel = state.entities.channels.find(
    channel => channel.id === Number.parseInt(channelId)
  );
  const orderedMembers = orderBy(
    members,
    [member => member.username.toLowerCase()],
    ["asc"]
  );
  return {
    guildId: Number.parseInt(guildId),
    channelId: Number.parseInt(channelId),
    channel,
    currentMemberId,
    orderedMembers,
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
