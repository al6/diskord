class ChatChannel < ApplicationCable::Channel
  def self.send_data(channel_name, data)
    ActionCable.server.broadcast(channel_name, data)
  end

  def subscribed
    stream_from specific_channel
  end

  private
  def specific_channel
    "chat_#{params[:channelId]}"
  end
end
