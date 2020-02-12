import { connect } from "react-redux";
import { login, removeErrors, demologin } from '../../../actions/session_actions';
import LoginForm from "./login_form";

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: 'Login'
})

const mapDispatchToProps = dispatch => ({
  removeErrors: () => dispatch(removeErrors()),
  login: member => dispatch(login(member)),
  demologin: () => dispatch(demologin())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)