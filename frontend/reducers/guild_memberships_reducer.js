import { RECEIVE_GUILD, RECEIVE_GUILDS } from "../actions/guild_membership_actions";

const guildMembershipsReducer = (state = [], action) => {
  debugger
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_GUILD:
      let newState = JSON.parse(JSON.stringify(state));
      return newState.push(action.guild)
    case RECEIVE_GUILDS:
      let newState = JSON.parse(JSON.stringify(state));
      return newState.push(action.guilds)
    default:
      return state;
  }
};

export default guildMembershipsReducer;