import { connect } from 'react-redux';
import GuildMembershipsIndex from './guild_memberships_index';
import { fetchGuildMemberships, createGuild, createGuildMembership } from '../../actions/guild_membership_actions';

const mapStateToProps = state => {
  return ({
  currentMemberId: state.session.id,
  guilds: state.entities.guilds
});
}

const mapDispatchToProps = dispatch => ({
  createGuild: guild => dispatch(createGuild(guild)),
  createGuildMembership: guild_membership => dispatch(createGuildMembership(guild_membership)),
  fetchGuildMemberships: member_id => dispatch(fetchGuildMemberships(member_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GuildMembershipsIndex);