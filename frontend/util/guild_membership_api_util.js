export const create = guild_membership =>
  $.ajax({
    method: "POST",
    url: "/api/guild_memberships",
    guild_membership
  });

export const fetchMemberships = member_id =>
  $.ajax({
    url: `/api/guild_memberships/${member_id}`
  });

export const fetchGuildMembers = guild_id =>
  $.ajax({
    url: `/api/guild_memberships/${guild_id}/guild_members`
  });
