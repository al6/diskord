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

export const register = member => dispatch => (
  APIUtil.register(member)
    .then(member => dispatch(receiveCurrentMember(member)),
    errors => dispatch(receiveErrors(errors))
  ));

export const login = member => dispatch => APIUtil.login(member)
    .then(member => dispatch(receiveCurrentMember(member)),
    errors => dispatch(receiveErrors(errors)));

export const logout = () => dispatch => (
  APIUtil.logout()
    .then(() => dispatch(logoutCurrentMember()),
    errors => dispatch(receiveErrors(errors))));

export const demologin = () => dispatch => dispatch(login({ email: 'tommy@fakemail.com', password: 'hunter2' }))
