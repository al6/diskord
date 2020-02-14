import * as GuildMembershipAPIUtil from '../util/guild_membership_api_util';

const RECEIVE_GUILD_MEMBERSHIP = 'RECEIVE_GUILD_MEMBERSHIP';
const RECEIVE_GUILD_MEMBERSHIPS = 'RECEIVE_GUILD_MEMBERSHIPS';

const receiveGuildMembership = guild_membership => ({
  type: RECEIVE_GUILD_MEMBERSHIP,
  guild_membership
})

const receiveGuildMemberships = guild_memberships => ({
  type: RECEIVE_GUILD_MEMBERSHIPS,
  guild_memberships
})

export const createGuildMembership = guild_membership => dispatch => GuildMembershipAPIUtil.create(guild_membership)
  .then(guild_membership => dispatch(receiveGuildMembership(guild_membership)));

export const fetchGuildMemberships = id => dispatch => GuildMembershipAPIUtil.fetchMemberships(id)
  .then(guild_memberships => dispatch(receiveGuildMemberships(guild_memberships)));