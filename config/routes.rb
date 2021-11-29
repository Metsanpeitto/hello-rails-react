# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users

  resources :greetings
  root 'landings#index'
  namespace :api do
    namespace :v1 do
      resources :greetings, only: [:index, :show, :create, :destroy]
    end
  end  
end
