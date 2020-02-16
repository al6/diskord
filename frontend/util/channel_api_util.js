export const createChannel = channel =>
  $.ajax({
    method: "POST",
    url: "/api/channels",
    data: { channel }
  });

export const fetchChannels = guild_id =>
  $.ajax({
    method: "GET",
    url: `/api/guilds/${guild_id}/channels`
  });
