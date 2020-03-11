export const createDmMembership = dm_membership =>
  $.ajax({
    method: "POST",
    url: "/api/dm_memberships",
    dm_membership
  });

export const fetchMemberships = () =>
  $.ajax({
    url: "/api/members/dm_memberships"
  });
