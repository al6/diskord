class Api::DmMembershipsController < ApplicationController
  def create
    render json: ["This does not work yet"], status: 400
  end

  private
  def dm_membership_params
    require(:dm_membership).permit(:channel_id, :first_member_id, :second_member_id)
  end
end
