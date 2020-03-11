import { RECEIVE_DM } from "../actions/dm_membership_actions";

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
    default:
      return state;
  }
};

export default dmsReducer;
