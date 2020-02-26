class Api::DmMembershipsController < ApplicationController
  def create
    @dm_membership = DmMembership.new(dm_membership_params)
    if @dm_membership.save
      render :show
    else
      render json: ["DM Membership did not save!!"], status: 400
    end
    render json: ["This does not work yet"], status: 400
  end

  private
  def dm_membership_params
    require(:dm_membership).permit(:channel_id, :first_member_id, :second_member_id)
  end
end
