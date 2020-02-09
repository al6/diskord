import {postMember, postSession, deleteSession} from '../util/session';

export const RECEIVE_CURRENT_MEMBER = "RECEIVE_CURRENT_MEMBER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

const receiveCurrentMember = member => ({
  type: RECEIVE_CURRENT_MEMBER,
  member
});

const logoutCurrentMember = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const createNewMember = formMember => dispatch => postMember(formMember)
  .then(member => dispatch(receiveCurrentMember(member)));

export const login = formMember => dispatch => postSession(formMember)
  .then(member => dispatch(receiveCurrentMember(member)));

export const logout = () => dispatch => deleteSession()
  .then(() => dispatch(logoutCurrentMember()));