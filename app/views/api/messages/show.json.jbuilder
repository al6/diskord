json.extract! @message, :id, :body, :author_id, :channel_id, :created_at, :updated_at
if @message.image.attached?
  json.image url_for(@message.image)
end
