Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do 
      resources :trackers
      resources :groups
      resources :challenges
    end 
  end
  devise_for :users
  get 'welcome/home'
  get '/app', to: 'welcome#app', as: 'app'  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'welcome#home'
end
