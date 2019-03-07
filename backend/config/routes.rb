Rails.application.routes.draw do


  resources :users

  resources :polls

  namespace :api do
    namespace :v1 do
      resources :users
    end
end


  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy'

  get '/signup', to:  'users#new'
  post '/users', to:  'users#create'

end
