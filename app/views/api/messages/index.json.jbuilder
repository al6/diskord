json.array! @messages_array do |message|
  json.extract! message, :id, :body, :author_id, :channel_id, :created_at, :updated_at
  #fix line 4 to re-normalize state
  json.set! :author, message.author.username
end
