import { logout } from "../../actions/session_actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchDmMemberships } from "../../actions/dm_membership_actions";
import DmMembershipsIndex from "./dm_memberships_index";

let subscription;

function subscribeToOwnDms(memberId, dispatch) {
  if (subscription) {
    subscription = subscription.unsubscribe();
  }
  subscription = App.cable.subscriptions.create(
    { channel: "DmChannel", memberId: memberId },
    {
      received: data => {
        dispatch(data);
      }
    }
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentUsername: state.entities.members[state.session.id].username,
    currentMemberId: state.session.id,
    channels: state.entities.channels,
    dms: state.entities.dms
  };
};

const mapDispatchToProps = dispatch => ({
  subscribe: memberId => subscribeToOwnDms(memberId, dispatch),
  fetchDmMemberships: () => dispatch(fetchDmMemberships()),
  logout: () => dispatch(logout())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DmMembershipsIndex)
);
