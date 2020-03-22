import * as APIUtil from "../util/dm_membership_api_util";
import { receiveErrors } from "./session_actions";

export const RECEIVE_DM = "RECEIVE_DM";
export const RECEIVE_DM_MEMBERSHIP = "RECEIVE_DM_MEMBERSHIP";
export const RECEIVE_DM_MEMBERSHIPS = "RECEIVE_DM_MEMBERSHIPS";

export const receiveDm = dm => ({
  type: RECEIVE_DM,
  dm
});

export const receiveDmMembership = dm_membership => {
  return { type: RECEIVE_DM_MEMBERSHIP, dm_membership };
};

const receiveDmMemberships = dm_memberships => ({
  type: RECEIVE_DM_MEMBERSHIPS,
  dm_memberships
});

export const fetchDmMemberships = () => dispatch => {
  return APIUtil.fetchMemberships().then(
    dm_memberships => dispatch(receiveDmMemberships(dm_memberships)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const createDmMembership = dm_membership => dispatch => {
  return APIUtil.createDmMembership(dm_membership).then(
    dm_membership => dispatch(receiveDmMembership(dm_membership)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};
