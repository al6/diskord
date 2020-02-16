import * as ChannelAPIUtil from "../util/channel_api_util";

export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";

const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

const receiveChannels = channels => ({
  type: RECEIVE_CHANNELS,
  channels
});

export const createChannel = channel => dispatch => {
  return ChannelAPIUtil.createChannel(channel).then(channel =>
    dispatch(receiveChannel(channel))
  );
};

export const fetchChannels = guild_id => dispatch => {
  return GuildMembershipAPIUtil.fetchMemberships(guild_id).then(channels =>
    dispatch(receiveChannels(channels))
  );
};
