import { connect } from "react-redux";
import { createChannel } from "../../actions/channel_actions";
import CreateChannelForm from "./create_channel_form";

const mapStateToProps = (state, ownProps) => {
  return {
    closeModal: ownProps.closeModal,
    guildId: ownProps.guildId
  };
};

const mapDispatchToProps = dispatch => ({
  createChannel: channel => dispatch(createChannel(channel))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateChannelForm);
