Rails.application.routes.draw do

  resources :users

  namespace :api do
    namespace :v1 do
      resources :polls
    end
  end


  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  get '/profile', to: "users#profile"



end
