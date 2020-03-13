class Api::DmMembershipsController < ApplicationController
  def create
    second_member_id = Member.find_by(email: params["dm_membership"]["second_member_email"]).id
    if second_member_id.nil?
      render json: ["That email doesn't exist"], status: 400
    else
      payload = {first_member_id: current_member.id, second_member_id: second_member_id}
      @dm_membership = DmMembership.new(payload)
      if @dm_membership.save
        message = Message.new(author_id: current_member.id, channel_id: @dm_membership.channel_id, body: params["dm_membership"]["body"])
        if message.save
          render :show
        else
          render json: ["Message not saved!"], status: 400
        end
      else
        render json: ["That didn't work!"], status: 400
      end
    end
  end

  private
  def dm_membership_params
    require(:dm_membership).permit(:second_member_email, :body)
  end
end
