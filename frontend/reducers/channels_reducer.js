import { RECEIVE_CHANNEL, RECEIVE_CHANNELS } from "../actions/channel_actions";
import {
  RECEIVE_DM_MEMBERSHIP,
  RECEIVE_DM_MEMBERSHIPS
} from "../actions/dm_membership_actions";
const channelsReducer = (state = [], action) => {
  debugger;
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CHANNEL:
      if (state.find(channel => channel.id === action.channel.id)) {
        return state;
      }
      newState = JSON.parse(JSON.stringify(state));
      return newState.concat(action.channel);
    case RECEIVE_CHANNELS:
      return action.channels;
    case RECEIVE_DM_MEMBERSHIP:
      if (state.find(channel => channel.id === action.channel.id)) {
        return state;
      }
      newState = JSON.parse(JSON.stringify(state));
      return newState.concat(action.channel);
    case RECEIVE_DM_MEMBERSHIPS:
      return action.dm_memberships;
    default:
      return state;
  }
};

export default channelsReducer;
