Rails.application.routes.draw do
  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }

    resources :users, only: [:index, :show, :create]

    get "/me", to: "users#show"
    post '/signup', to: "users#create"
    post '/login', to: "sessions#create"
    delete '/logout', to: "sessions#destroy"
    
end
