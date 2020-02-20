import * as APIUtil from "../util/session_api_util";
export const RECEIVE_CURRENT_MEMBER = "RECEIVE_CURRENT_MEMBER";
export const LOGOUT_CURRENT_MEMBER = "LOGOUT_CURRENT_MEMBER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const REMOVE_SESSION_ERRORS = "REMOVE_SESSION_ERRORS";
const receiveCurrentMember = member => ({
  type: RECEIVE_CURRENT_MEMBER,
  member
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const removeErrors = () => ({
  type: REMOVE_SESSION_ERRORS
});

export const register = member => dispatch => {
  return APIUtil.register(member).then(
    member => dispatch(receiveCurrentMember(member)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const login = member => dispatch => {
  return APIUtil.login(member).then(
    member => dispatch(receiveCurrentMember(member)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const logout = () => dispatch => {
  return APIUtil.logout().then(() => location.reload());
};

export const demologin = () => dispatch =>
  dispatch(login({ email: "dommy@a.com", password: "hunter2" }));
