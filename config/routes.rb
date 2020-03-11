Rails.application.routes.draw do
  mount ActionCable.server, at: '/cable'
  namespace :api, defaults: {format: :json} do
    resources :members, only: [:create] do
      get :dm_memberships, on: :collection
    end
    resource :session, only: [:create, :destroy]
    
    resources :guilds, only: [:index, :create, :destroy] do
      get :channels, on: :member
      get :members, on: :member
    end

    post '/guild_memberships/:name', to: 'guild_memberships#join_guild', as: 'guild_membership'
    resources :guild_memberships, only: [:show, :create, :destroy] do
      get :guild_members, on: :member
    end

    resources :channels, only: [:show, :create, :index, :destroy] do
      get :messages, on: :member
    end

    resources :dm_memberships, only: [:create, :destroy]

    
    resources :messages, only: [:index, :create, :destroy]
  end
  root to: 'static_pages#root'
end
