json.array! @messages_array do |message|
  json.extract! message, :id, :body, :author_id, :channel_id
  json.set! :author, message.author.username
end
