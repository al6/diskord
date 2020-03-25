class DmChannel < ApplicationCable::Channel
  def self.send_data(member_id, data)
    ActionCable.server.broadcast(member_id, data)
  end

  def subscribed
    stream_from specific_member
  end

  private
  def specific_member
    "member_#{params[:memberId]}"
  end
end
