import * as APIUtil from '../util/guild_api_util';

const RECEIVE_GUILD = 'RECEIVE_GUILD';

const receiveGuild = guild => ({
  type: RECEIVE_GUILD,
  guild
})

export const createGuild = guild => dispatch => APIUtil.create(guild)
  .then(guild => dispatch(receiveGuild(guild)))