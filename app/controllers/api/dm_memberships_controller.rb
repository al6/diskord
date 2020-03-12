class Api::DmMembershipsController < ApplicationController
  def create
    puts params
    @dm_membership = DmMembership.new(dm_membership_params)
    if @dm_membership.save
      @message = Message.new(body: dm_membership_params[:body], author_id: current_member.id, channel_id: @dm_membership.channel_id)
      if @message.save
        render :show
      else
        render json: ["Message failed to save!"], status: 400
      end
    else
      render json: ["DM not sent!"], status: 400
    end
  end

  private
  def dm_membership_params
    require(:dm_membership).permit(:channel_id, :first_member_email, :second_member_email, :body)
  end
end
