import { connect } from "react-redux";
import { removeErrors, register } from '../../../actions/session_actions';
import RegisterForm from "./register_form";

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: 'Register'
})

const mapDispatchToProps = dispatch => ({
  removeErrors: () => dispatch(removeErrors()),
  register: member => dispatch(register(member))
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)