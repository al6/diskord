import { connect } from 'react-redux';
import GuildChannelsIndex from './guild_channels_index';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentMemberId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(GuildChannelsIndex);