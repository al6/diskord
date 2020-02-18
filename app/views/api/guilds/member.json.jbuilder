json.array! @guild_members_array do |guild_member|
  json.extract! guild_member, :id, :username
end
