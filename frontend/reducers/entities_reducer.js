import { combineReducers } from "redux";
import membersReducer from "./members_reducer";

const entitiesReducer = combineReducers({
  members: membersReducer
});

export default entitiesReducer;