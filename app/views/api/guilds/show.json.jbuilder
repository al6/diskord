json.extract! @guild, :id, :name, :owner_id
if @guild.emblem.attached?
  json.emblem url_for(@guild.emblem)
end
