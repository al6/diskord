// import * as GuildAPIUtil from '../util/guild_api_util';
// import * as GuildMembershipAPIUtil from '../util/guild_membership_api_util';

// const RECEIVE_GUILD = 'RECEIVE_GUILD';

// const receiveGuild = guild => ({
//   type: RECEIVE_GUILD,
//   guild
// })

// const receiveGuilds = guilds => ({
//   type: RECEIVE_GUILDS,
//   guilds
// })

// export const createGuild = guild => dispatch => GuildAPIUtil.create(guild)
//   .then(guild => dispatch(receiveGuild(guild)));


// export const fetchGuildMemberships = id => dispatch => GuildMembershipAPIUtil.fetchMemberships(id)
//   .then(guilds => dispatch(receiveGuilds(guilds)));
