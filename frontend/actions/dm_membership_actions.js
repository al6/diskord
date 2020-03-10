import * as APIUtil from "../util/dm_membership_api_util";
import { receiveErrors } from "./session_actions";

const RECEIVE_DM = "RECEIVE_DM";
const RECEIVE_DM_MEMBERSHIP = "RECEIVE_DM_MEMBERSHIP";

export const receiveDm = dm => ({
  type: RECEIVE_DM,
  dm
});

const receiveDmMembership = dm_membership => ({
  type: RECEIVE_DM_MEMBERSHIP,
  dm_membership
});

// export const fetchDmMembership = () => dispatch => {
//   return APIUtil.fetchMemberships().then(dm_memberships => dispatch()
// }

export const createDmMembership = dm_membership => dispatch => {
  return APIUtil.createDmMembership(dm_membership).then(
    dm_membership => dispatch(receiveDmMembership(dm_membership)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};
