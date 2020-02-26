import { connect } from "react-redux";
import { createChannel } from "../../actions/channel_actions";
import CreateChannelForm from "./create_channel_form";
import { removeErrors } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    closeModal: ownProps.closeModal,
    guildId: ownProps.guildId,
    errors: state.session.errors
  };
};

const mapDispatchToProps = dispatch => ({
  createChannel: channel => dispatch(createChannel(channel)),
  removeErrors: () => dispatch(removeErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateChannelForm);
