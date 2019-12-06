# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api, format: "json" do
    mount_devise_token_auth_for "User", at: "auth", controllers: {
      registrations: "api/auth/registrations"
    }
  end
end
