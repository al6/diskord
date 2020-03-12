
import { RECEIVE_CURRENT_MEMBER, LOGOUT_CURRENT_MEMBER } from "../actions/session_actions";

const default_state = {
  id: null
};

const sessionReducer = (state = default_state, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_MEMBER:
      return { id: action.member.id };
    case LOGOUT_CURRENT_MEMBER:
      return default_state;
    default:
      return state;
  }
};

export default sessionReducer;