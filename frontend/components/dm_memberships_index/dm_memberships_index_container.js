import { connect } from "react-redux";
import DmMembershipsIndex from "./dm_memberships_index";
import { logout } from "../../actions/session_actions";
import { fetchChannels } from "../../actions/channel_actions";
import { fetchGuildMembers } from "../../actions/guild_membership_actions";
import { fetchDmMemberships } from "../../actions/dm_membership_actions";

const mapStateToProps = state => {
  return {
    currentUsername: state.entities.members[state.session.id].username,
    currentMemberId: state.session.id,
    dmMemberships: state.entities.channels
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchChannels: guildId => dispatch(fetchChannels(guildId)),
  fetchGuildMembers: guildId => dispatch(fetchGuildMembers(guildId)),
  fetchDmMemberships: () => dispatch(fetchDmMemberships())
});

export default connect(mapStateToProps, mapDispatchToProps)(DmMembershipsIndex);
