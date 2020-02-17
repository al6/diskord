import { RECEIVE_MESSAGE, RECEIVE_MESSAGES } from "../actions/message_actions";

const messagesReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_MESSAGE:
      newState = JSON.parse(JSON.stringify(state));
      return newState.concat(action.message);
    case RECEIVE_MESSAGES:
      return action.messages;
    default:
      return state;
  }
};

export default messagesReducer;
