class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    if @message.save
      ChatChannel.send_data("chat_#{@message.channel_id}", @message.as_json)
      render :show
    else
      render json: ["Sorry, max of 100 characters long!"], status: 400
    end
  end

  private
  def message_params
    params.require(:message).permit(:body, :author_id, :channel_id)
  end
end
