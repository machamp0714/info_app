# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api, format: "json" do
    mount_devise_token_auth_for "User", at: "auth", controllers: {
      registrations: "api/auth/registrations",
      sessions: "api/auth/sessions",
      omniauth_callbacks: "api/auth/omniauth_callbacks"
    }

    resources :workspaces, only: %i[index create show update destroy], shallow: true do
      resources :columns, only: %i[index create update destroy] do
        resources :tasks, only: %i[index create update destroy]
      end
    end

    resources :qiita_stocks, only: %i[index] do
      get "callback", on: :collection
      get "check_async", on: :collection
    end

    get "github_oauth_url", to: "auth/omniauth_callbacks#github"
    get "qiita_token", to: "access_tokens#qiita_token"
    get "current_user", to: "users#currentuser"
    get "default_workspace", to: "workspaces#default_workspace"
    post "ogp", to: "ogp#ogp"
  end

  get "csrf_token", to: "application#csrf_token"
end
