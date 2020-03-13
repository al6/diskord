export const createDmMembership = dm_membership => {
  console.log(dm_membership);
  return $.ajax({
    method: "POST",
    url: "/api/dm_memberships",
    data: { dm_membership }
  });
};

export const fetchMemberships = () =>
  $.ajax({
    url: "/api/members/dm_memberships"
  });
