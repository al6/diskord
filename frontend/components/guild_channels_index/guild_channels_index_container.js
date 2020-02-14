import { connect } from 'react-redux';
import GuildChannelsIndex from './guild_channels_index';

const mapStateToProps = state => ({
  currentMemberId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  demologin: () => dispatch(demologin())
});

export default connect(mapStateToProps, mapDispatchToProps)(GuildChannelsIndex);