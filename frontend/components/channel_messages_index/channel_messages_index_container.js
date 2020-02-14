import { connect } from 'react-redux';
import ChannelMessagesIndex from './channel_messages_index';

const mapStateToProps = state => ({
  currentMemberId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  demologin: () => dispatch(demologin())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelMessagesIndex);