# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api, format: "json" do
    mount_devise_token_auth_for "User", at: "auth", controllers: {
      registrations: "api/auth/registrations",
      sessions: "api/auth/sessions",
      omniauth_callbacks: "api/auth/omniauth_callbacks"
    }

    resources :workspaces, only: %i[index create update destroy], shallow: true do
      resources :columns, only: %i[index create update destroy] do
        resources :tasks, only: %i[create update destroy]
      end
    end
    get "github_oauth_url", to: "auth/omniauth_callbacks#github"
  end

  get "csrf_token", to: "application#csrf_token"
end
