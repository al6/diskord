class Api::ChannelsController < ApplicationController
  def create
    @channel = Channel.new(channel_params)
    if @channel.save
      render :show
    else
      render json: ["Channel creation failed! Try a different name"], status: 400
    end
  end

  private
  def channel_params
    params.require(:channel).permit(:name, :guild_id)
  end
end

