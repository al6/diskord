class Api::DmMembershipsController < ApplicationController
  def index

  end
  
  def create
<<<<<<< Updated upstream
    
=======
    @dm_membership = DmMembership.new(dm_membership_params)
    if @dm_membership_params.save
      
      render :show
    else
      render json: ["DM Membership did not save!!"], status: 400
    end
  end

  private
  def dm_membership_params
    require(:dm_membership).permit(:channel_id, :first_member_id, :second_member_id)
>>>>>>> Stashed changes
  end
end
