class Api::SessionsController < ApplicationController
  def create
    @member = Member.find_by_credentials(
      member_params[:username],
      member_params[:password]
    )

    if @member
      login(@member)
      render "api/members/show"
    else
      render json: { errors: "Invalid username/password combination" }, status: 401
    end
  end

  def destroy
    @member = current_member
    if @member
      logout
      render json: {}
    else
      render json: { errors: "Nobody signed in" }, status: 404
    end
  end

  private

  def member_params
    params.require(:member).permit(:username, :password)
  end
end
