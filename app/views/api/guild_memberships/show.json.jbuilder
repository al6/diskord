if @guild_membership.nil?
  if @guild_memberships.is_a?(Array)
    json.array! @guild_memberships do |guild|
      json.id guild.id
      json.name guild.name
    end
  else
    json.extract! @guild_memberships, :guild
  end
else
  json.set! :id, @guild_membership.guild.id, :name, @guild_membership.guild.name
end

