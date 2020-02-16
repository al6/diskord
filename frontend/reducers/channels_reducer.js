import { RECEIVE_CHANNEL, RECEIVE_CHANNELS } from "../actions/channel_actions";

const channelsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState, channelIds;
  switch (action.type) {
    case RECEIVE_CHANNEL:
      newState = JSON.parse(JSON.stringify(state));
      return newState.concat(action.channel);
    case RECEIVE_CHANNELS:
      return action.channels;
    default:
      return state;
  }
};

export default channelsReducer;
