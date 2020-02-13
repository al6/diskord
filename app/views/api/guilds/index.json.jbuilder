json.array! @guilds do |guild|
  json.extract! guild, :id, :username
end 