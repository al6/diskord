import * as GuildAPIUtil from '../util/guild_api_util';

const RECEIVE_GUILD = 'RECEIVE_GUILD';

const receiveGuild = guild => ({
  type: RECEIVE_GUILD,
  guild
})

export const 

export const createGuild = guild => dispatch => GuildAPIUtil.create(guild)
  .then(guild => dispatch(receiveGuild(guild)));