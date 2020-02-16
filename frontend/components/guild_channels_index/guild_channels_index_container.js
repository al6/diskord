import { connect } from "react-redux";
import GuildChannelsIndex from "./guild_channels_index";
import { logout } from "../../actions/session_actions";
import { fetchChannels } from "../../actions/channel_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    currentMemberId: state.session.id,
    guildId: ownProps.match.params.guildId,
    channels: state.entities.channels.filter(
      channel =>
        channel.guild_id === Number.parseInt(ownProps.match.params.guildId)
    )
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchChannels: guildId => dispatch(fetchChannels(guildId))
});

export default connect(mapStateToProps, mapDispatchToProps)(GuildChannelsIndex);
