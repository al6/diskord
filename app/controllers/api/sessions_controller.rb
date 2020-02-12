class Api::SessionsController < ApplicationController
  def create
    @member = Member.find_by_credentials(
      params[:member][:email],
      params[:member][:password]
    )

    if @member
      login(@member)
      render "api/members/show"
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    @member = current_member
    if @member
      logout
      render json: {}
    else
      render json: ["Nobody signed in" ], status: 404
    end
  end
end
