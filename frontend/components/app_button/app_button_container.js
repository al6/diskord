import { connect } from "react-redux";
import AppButton from "./app_button";

const mapStateToProps = state => ({
  currentMember: state.session.id
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(AppButton)