class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    if @message.save
      message_payload = {
        id: @message.id,
        body: @message.body,
        author: @message.author,
        author_id: @message.author_id,
        channel_id: @message.channel_id,
        created_at: @message.created_at,
        updated_at: @message.updated_at,
        username: @message.author.username
      }
      
      if @message.image.attached?
        message_payload[:image] = url_for(@message.image)
      end

      ChatChannel.send_data("chat_#{@message.channel_id}", message_payload.as_json)
      render :show
    else
      render json: ["Sorry, max of 100 characters long!"], status: 400
    end
  end

  private
  def message_params
    params.require(:message).permit(:body, :author_id, :channel_id, :image)
  end
end
