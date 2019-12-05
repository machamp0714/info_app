# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api, format: "json" do
    resources :users, only: %i[create]

    get "/oauth/:provider/callback", to: "sessions#create"
    post "/login", to: "sessions#create"
  end
end
