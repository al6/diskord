class Api::MembersController < ApplicationController
  def create
    @member = Member.new(member_params)
    if @member.save
      render :show
    else
      render json: [@member.errors.full_messages], status: 409
    end
  end

  private
  def member_params
    params.require(:member).permit(:email, :username, :password)
  end
end
