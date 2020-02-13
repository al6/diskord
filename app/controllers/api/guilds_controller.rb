class Api::GuildsController < ApplicationController
  def index
    @guilds = Guild.all
    render :index
  end
  
  def create
    @guild = Guild.new(guild_params)
    if @guild.save
      debugger
      GuildMembership.create(member_id: guild_params[:owner_id].to_i, guild_id: @guild.id)
      debugger
      render :sh
    else
      render json: ["Sorry, that guild name is taken!"], status: 409
    end
  end

  def destroy
    current_id = current_member.id
    if current_id
      guild = Guild.find_by(owner_id: guild_params[:owner_id])
      if guild
        guild.destroy
        return
      else
        render json: ["Guild not found"], status: 404
      end 
    else
      render json: ["That's not your guild!"], status: 401
    end
  end

  private
  def guild_params
    params.require(:guild).permit(:name, :owner_id)
  end
end

