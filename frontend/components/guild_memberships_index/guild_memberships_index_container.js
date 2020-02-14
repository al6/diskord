import { connect } from 'react-redux';
import GuildMembershipsIndex from './guild_memberships_index';

const mapStateToProps = state => ({
  currentMemberId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  fetchOwnMemberships: () => dispatch(fetchOwnMemberships())
});

export default connect(mapStateToProps, mapDispatchToProps)(GuildMembershipsIndex);