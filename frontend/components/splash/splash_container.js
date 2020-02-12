import { connect } from 'react-redux';
import Splash from './splash';
import { login } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUserId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  demologin: () => dispatch(login({ email: 'demouser', password: 'password' }))
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);