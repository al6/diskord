import { connect } from 'react-redux';
import Splash from './splash';
import { demologin } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentMemberId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  demologin: () => dispatch(demologin())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);