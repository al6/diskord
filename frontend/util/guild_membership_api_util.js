export const create = guild_membership => (
  $.ajax({
    method: 'POST',
    url: '/api/guild_memberships',
    data: { guild_membership },
  })
);

export const fetchMemberships = member_id => (
  $.ajax({
    method: 'GET',
    url: '/api/guild_memberships',
    member_id
  })
);