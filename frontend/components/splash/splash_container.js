import { connect } from 'react-redux';
import Splash from './splash';
import { demologin, removeErrors } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentMemberId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  removeErrors: () => dispatch(removeErrors()),
  demologin: () => dispatch(demologin())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);