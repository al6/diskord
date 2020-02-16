import * as GuildMembershipAPIUtil from "../util/guild_membership_api_util";
import * as GuildAPIUtil from "../util/guild_api_util";

export const RECEIVE_GUILD_MEMBERSHIP = "RECEIVE_GUILD_MEMBERSHIP";
export const RECEIVE_GUILD = "RECEIVE_GUILD";
export const RECEIVE_GUILDS = "RECEIVE_GUILDS";

const receiveGuild = guild => ({
  type: RECEIVE_GUILD,
  guild
});

const receiveGuilds = guilds => ({
  type: RECEIVE_GUILDS,
  guilds
});

const receiveGuildMembership = guild_membership => ({
  type: RECEIVE_GUILD_MEMBERSHIP,
  guild_membership
});

export const createGuildMembership = guild_membership => dispatch =>
  GuildMembershipAPIUtil.create(guild_membership).then(guild_membership =>
    dispatch(receiveGuildMembership(guild_membership))
  );

export const createGuild = guild => dispatch => {
  return GuildAPIUtil.create(guild).then(guild =>
    dispatch(receiveGuild(guild))
  );
};

export const fetchGuildMemberships = id => dispatch => {
  return GuildMembershipAPIUtil.fetchMemberships(id).then(guilds =>
    dispatch(receiveGuilds(guilds))
  );
};