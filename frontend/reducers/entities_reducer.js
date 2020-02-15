import { combineReducers } from "redux";
import membersReducer from "./members_reducer";
import guildsReducer from './guilds_reducer';

const entitiesReducer = combineReducers({
  members: membersReducer,
  guilds: guildsReducer,
});

export default entitiesReducer;