Rails.application.routes.draw do
  get '/hello', to: 'application#hello_world'

  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }

    resources :users, only: [:index, :show]
    get "/me" to: "users#show"


end
