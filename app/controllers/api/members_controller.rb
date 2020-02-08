class Api::MembersController < ApplicationController
  def create
    @member = Member.new(member_params)
    if @member.save
      render :show
    else
      render @member.errors.full_messages
    end
  end
end
