import { RECEIVE_CURRENT_MEMBER } from "../actions/session_actions";
import {
  RECEIVE_GUILD_MEMBERS,
  RECEIVE_GUILD_MEMBER
} from "../actions/guild_membership_actions";
import { RECEIVE_DM_MEMBERSHIP } from "../actions/dm_membership_actions";
const membersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_MEMBER:
    case RECEIVE_GUILD_MEMBER:
      return Object.assign({}, state, { [action.member.id]: action.member });
    case RECEIVE_DM_MEMBERSHIP:
      return Object.assign({}, state, action.dm_membership);
    case RECEIVE_GUILD_MEMBERS:
      return action.guild_members;
    default:
      return state;
  }
};

export default membersReducer;
