import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = document.location.host.indexOf('localhost') >= 0 ? [thunk, logger] : [thunk]

const configureStore = (preloadedState = {}) =>
  createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(...middleware)));

export default configureStore;

