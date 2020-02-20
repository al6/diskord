import {
  RECEIVE_GUILD,
  RECEIVE_GUILDS
} from "../actions/guild_membership_actions";

const guildsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_GUILD:
      newState = JSON.parse(JSON.stringify(state));
      if (newState.includes(action.guild)) {
        return newState;
      } else {
        return newState.concat(action.guild);
      }
    case RECEIVE_GUILDS:
      return action.guilds;
    default:
      return state;
  }
};

export default guildsReducer;
