class Api::ChannelsController < ApplicationController
  def create
    if channel_params[:name] == ""
      render json: ["This field is required"]
    else 
      @channel = Channel.new(channel_params)
      if @channel.save
        redux_action = {
          type: "RECEIVE_CHANNEL",
          channel: @channel.as_json
        }
        GuildChannel.send_data("guild_#{@channel.guild_id}", redux_action.as_json)
        render :show
      else
        render json: ["Channel creation failed! Try a different name"], status: 400
      end
    end
  end

  def messages
    @messages_array = Message.where(channel_id: params[:id])&.to_a
    if @messages_array
      render 'api/messages/index'
    else
      render json: ["No messages found!"], status: 404
    end
  end

  def show
    @channel = Channel.where(id: params[:id])
    if @channel.present?
      render :show
    else
      render json: ["No channel found!"]
    end
  end

  private
  def channel_params
    params.require(:channel).permit(:id, :name, :guild_id)
  end
end

