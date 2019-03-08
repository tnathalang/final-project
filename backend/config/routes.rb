Rails.application.routes.draw do


  resources :polls

  namespace :api do
    namespace :v1 do
      resources :users
      resources :authentication, only: [:create] 
    end
end

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get '/profile' to: "users#profile"



end
