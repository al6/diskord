class Api::GuildsController < ApplicationController
  def index
    @guilds = Guild.all
    render :index
  end
  
  def create
    if guild_params["name"] == "" 
      render json: ["This field is required"], status: 400 
    else
      @guild = Guild.new(guild_params)
        if @guild.save
          render :show
        else
          render json: ["Sorry, that guild name is taken!"], status: 409
        end
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

  def channels
    @channels_array = Channel.where(guild_id: params[:id])&.to_a
    if @channels_array
      render 'api/channels/index'
    else
      render json: ["No channels found!"], status: 404
    end
  end

  private
  def guild_params
    params.require(:guild).permit(:name, :owner_id, :emblem)
  end
end

