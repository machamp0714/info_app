# frozen_string_literal: true

require "rails_helper"

RSpec.describe "OmniauthCallbacks", type: :request do
  describe "GET /omniauth_google_callbacks" do
    subject(:google_omniauth_callback) { get "/api/auth/google_oauth2/callback" }

    before do
      Rails.application.env_config["devise.mapping"] = Devise.mappings[:user]
      Rails.application.env_config["omniauth.params"] = omniauth_params
      allow_any_instance_of(DeviseTokenAuth::OmniauthCallbacksController).to receive(:auth_hash).and_return(google_hash)
    end

    it "return 200 status code" do
      google_omniauth_callback

      expect(response).to have_http_status :ok
    end

    it "gives access token in header" do
      google_omniauth_callback

      expect(response).to have_header("access-token")
    end

    it "create a new user" do
      expect { google_omniauth_callback }.to change(User, :count).by(1)
    end
  end
end
