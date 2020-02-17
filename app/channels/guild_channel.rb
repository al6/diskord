class GuildChannel < ApplicationCable::Channel
  def self.send_data(guild_name, data)
    ActionCable.server.broadcast(guild_name, data)
  end

  def subscribed
    stream_from specific_guild
  end

  private
  def specific_guild
    "guild_#{params[:guildId]}"
  end
end
