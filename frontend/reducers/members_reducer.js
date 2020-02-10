import { RECEIVE_CURRENT_MEMBER } from "../actions/session_actions";

const membersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_MEMBER:
      return Object.assign({}, state, {[action.member.id] : action.member })
    default:
      return state;
  }
};

export default membersReducer;