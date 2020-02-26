class Api::DmMembershipsController < ApplicationController
  def index
    @guild_member = Member.find_by(id: params[:id])
    if @guild_member
      @dm_memberships = @guild_member.dm_memberships.to_a
      render :index
    else
      render json: ["No dms found!"]
    end
  end

  def create
    @dm_membership = DmMembership.new(dm_membership_params)
    if @dm_membership.save
      render :show
    else
      render json: ["DM Membership did not save!!"], status: 400
    end
  end

  private
  def dm_membership_params
    require(:dm_membership).permit(:channel_id, :first_member_id, :second_member_id)
  end
end
