import { connect } from "react-redux";
import { login, removeErrors } from '../../../actions/session_actions';
import LoginForm from "./login_form";


const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: 'Login'
})

const mapDispatchToProps = dispatch => ({
  removeErrors: () => dispatch(removeErrors()),
  login: member => dispatch(login(member))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)