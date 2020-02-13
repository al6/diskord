export const create = guild_membership => (
  $.ajax({
    method: 'POST',
    url: '/api/guild_memberships',
    data: { guild_membership },
  })
);