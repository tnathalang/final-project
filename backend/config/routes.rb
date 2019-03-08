Rails.application.routes.draw do


  resources :polls

 
  resources :users


  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  get '/profile', to: "users#profile"



end
