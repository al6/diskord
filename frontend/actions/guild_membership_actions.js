import * as GuildMembershipAPIUtil from "../util/guild_membership_api_util";
import * as GuildAPIUtil from "../util/guild_api_util";
import { receiveErrors } from "./session_actions";

export const RECEIVE_GUILD_MEMBERS = "RECEIVE_GUILD_MEMBERS";
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

const receiveGuildMembers = guild_members => ({
  type: RECEIVE_GUILD_MEMBERS,
  guild_members
});

export const createGuild = guild => dispatch => {
  return GuildAPIUtil.create(guild).then(
    guild => dispatch(receiveGuild(guild)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const joinGuild = name => dispatch => {
  return GuildMembershipAPIUtil.joinGuild(name).then(
    guild => dispatch(receiveGuild(guild)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const createGuildMembership = guild_membership => dispatch =>
  GuildMembershipAPIUtil.create(guild_membership).then(
    guild_membership => dispatch(receiveGuildMembership(guild_membership)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const fetchGuildMemberships = id => dispatch => {
  return GuildMembershipAPIUtil.fetchMemberships(id).then(guilds =>
    dispatch(receiveGuilds(guilds))
  );
};

export const fetchGuildMembers = guild_id => dispatch => {
  return GuildMembershipAPIUtil.fetchGuildMembers(guild_id).then(members =>
    dispatch(receiveGuildMembers(members))
  );
};
