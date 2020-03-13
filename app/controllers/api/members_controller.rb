class Api::MembersController < ApplicationController
  def create
    if member_params[:email] == "" && member_params[:username] == "" && member_params[:password] == ""
      render json: ["This field is required", "This field is required", "This field is required"], status: 400
    else
      @member = Member.new(member_params)
      if @member.save
        login(@member)
        render :show
      else
        render json: @member.errors.full_messages, status: 409
      end
    end
  end

  def dm_memberships
    if current_member
      @dm_memberships = DmMembership.where(first_member_id: current_member.id).or(DmMembership.where(second_member_id: current_member.id))
      if @dm_memberships.empty?
        render json: ["No dms found!"], status: 400
      else
        render :dms
      end
    else
      render json: ["No current member!"], status: 400
    end
  end

  private
  def member_params
    params.require(:member).permit(:email, :username, :password)
  end
end
