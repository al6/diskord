import * as APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_MEMBER = "RECEIVE_CURRENT_MEMBER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentMember = member => ({
  type: RECEIVE_CURRENT_MEMBER,
  member
});

const logoutCurrentMember = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const signup = formMember => dispatch => 
  APIUtil.postMember(formMember)
    .then(member => dispatch(receiveCurrentMember(member))), ;

export const login = formMember => dispatch => 
  APIUtil.postSession(formMember)
    .then(member => dispatch(receiveCurrentMember(member)));

export const logout = () => dispatch => 
  APIUtil.deleteSession()
    .then(() => dispatch(logoutCurrentMember()));