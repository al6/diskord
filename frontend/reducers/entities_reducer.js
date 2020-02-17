import { combineReducers } from "redux";
import membersReducer from "./members_reducer";
import guildsReducer from "./guilds_reducer";
import channelsReducer from "./channels_reducer";
import messagesReducer from "./messages_reducer";

const entitiesReducer = combineReducers({
  members: membersReducer,
  guilds: guildsReducer,
  channels: channelsReducer,
  messages: messagesReducer
});

export default entitiesReducer;
