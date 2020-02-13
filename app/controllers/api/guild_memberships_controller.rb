class Api::GuildMembershipsController < ApplicationController
  def create
    @guild = Guild.find_by(name: guild_membership_params[:name])
    @guild_membership = GuildMembership.new(member_id: guild_membership_params[:id], guild_id: @guild.id)
    if @guild_membership.save
      render :show
    else
      render json: ["Guild membership failed to save"], status: 400
    end
  end

  def destroy
    # @guild_memberships = GuildMembership.find_by(member_id: :member_id)
    # if @guild_memberships
  end
  
  def show
    # @guild_memberships = GuildMembership.find_by(member_id: :member_id)
    # if @guild_memberships
    #   render :show
    # else
    #   render json: ["No guild memberships found!"], status: 404
    # end
  end

  private
  def guild_membership_params
    require(:guild_membership).permit(:member_id, :name)
  end
end
