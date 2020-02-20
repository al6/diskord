import { connect } from "react-redux";
import GuildChannelsIndex from "./guild_channels_index";
import { logout } from "../../actions/session_actions";
import { fetchChannels, receiveChannel } from "../../actions/channel_actions";
import { fetchGuildMembers } from "../../actions/guild_membership_actions";

let subscription;

function subscribeToGuild(guildId, dispatch) {
  if (subscription) {
    subscription = subscription.unsubscribe();
  }
  subscription = App.cable.subscriptions.create(
    { channel: "GuildChannel", guildId: guildId },
    {
      received: data => {
        dispatch(receiveChannel(data));
      }
    }
  );
}

const mapStateToProps = (state, ownProps) => {
  const guildId = ownProps.match.params.guildId;
  const guild = state.entities.guilds.find(
    guild => guild.id === Number.parseInt(guildId)
  );
  return {
    currentMemberId: state.session.id,
    guildId,
    guild,
    channels: state.entities.channels.filter(
      channel => channel.guild_id === Number.parseInt(guildId)
    )
  };
};

const mapDispatchToProps = dispatch => ({
  subscribe: guildId => subscribeToGuild(guildId, dispatch),
  logout: () => dispatch(logout()),
  fetchChannels: guildId => dispatch(fetchChannels(guildId)),
  fetchGuildMembers: guildId => dispatch(fetchGuildMembers(guildId))
});

export default connect(mapStateToProps, mapDispatchToProps)(GuildChannelsIndex);
