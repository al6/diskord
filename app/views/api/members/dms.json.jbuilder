json.array! @dm_memberships do |dm_membership|
  json.id dm_membership.channel.id
  if dm_membership.first_member_id == current_member.id
    # json.second_member_id dm_membership.second_member.id
    json.name dm_membership.second_member.username
  else
    # json.first_member_id dm_membership.first_member.id
    json.name dm_membership.first_member.username
  end
end