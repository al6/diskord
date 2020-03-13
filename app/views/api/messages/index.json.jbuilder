json.array! @messages_array do |message|
  json.extract! message, :id, :body, :author_id, :channel_id, :created_at, :updated_at
  json.username message.author.username
  if message.image.attached?
    json.image url_for(message.image)
  end
end
