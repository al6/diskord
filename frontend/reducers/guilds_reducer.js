import { RECEIVE_GUILD, RECEIVE_GUILDS } from "../actions/guild_membership_actions";

const guildsReducer = (state = [], action) => {
  // debugger
  Object.freeze(state);
  // console.log(state)
  // console.log(action)
  let newState;
  switch (action.type) {
    case RECEIVE_GUILD:
      console.log("receiveguild")
      newState = JSON.parse(JSON.stringify(state));
      return newState.concat(action.guild)
    case RECEIVE_GUILDS:
      newState = JSON.parse(JSON.stringify(state));
      console.log(newState)
      return newState.concat(action.guilds)
    default:
      console.log("default case")
      return state;
  }
};

export default guildsReducer;