import { RECEIVE_GUILD } from "../actions/guild_actions";

const guildReducer = (state = [], action) => {
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

export default guildReducer;