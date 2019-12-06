# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api, format: "json" do
    resources :users, only: %i[create]

    get "/auth/github" => redirect(
      "https://github.com/login/oauth/authorize?client_id=#{ENV['GITHUB_KEY']}&client_secret=#{ENV['GITHUB_SECRET']}"
    )
    get "/oauth/github/callback", to: "omniauth_callbacks#github"
    post "/login", to: "sessions#create"
  end
end
