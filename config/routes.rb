Rails.application.routes.draw do
  resources :greetings
  root  'landings#index'
end
