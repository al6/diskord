import {
  RECEIVE_DM,
  RECEIVE_DM_MEMBERSHIP,
  RECEIVE_DM_MEMBERSHIPS
} from "../actions/dm_membership_actions";

const dmsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_DM:
      newState = JSON.parse(JSON.stringify(state));
      if (newState.includes(action.dm)) {
        return newState;
      } else {
        return newState.concat(action.dm);
      }
    case RECEIVE_DM_MEMBERSHIP:
      // if (state.find(channel => channel.id === action.channel.id)) {
      //   return state;
      // }
      newState = JSON.parse(JSON.stringify(state));
      return newState.concat(action.dm_membership);
    case RECEIVE_DM_MEMBERSHIPS:
      return action.dm_memberships;
    default:
      return state;
  }
};

export default dmsReducer;
