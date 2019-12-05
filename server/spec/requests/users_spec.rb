# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Users", type: :request do
  describe "POST /users" do
    context "when params invalid" do
      subject(:post_users_path) { post api_users_path, params: invalid_params }

      let(:invalid_params) do
        {
          user: {
            name: "",
            email: "",
            password: ""
          }
        }
      end

      it "returns 422 status code" do
        post_users_path
        expect(response).to have_http_status :unprocessable_entity
      end

      it "returns errors json" do
        errors = {
          "errors" => {
            "password" => [
              "can't be blank",
              "is too short (minimum is 8 characters)"
            ],
            "name" => [
              "can't be blank"
            ],
            "email" => [
              "can't be blank",
              "is invalid"
            ]
          }
        }
        post_users_path
        expect(json).to eq errors
      end
    end

    context "when valid params" do
      subject(:post_users_path) { post api_users_path, params: valid_params }

      let(:user) { build :user }
      let(:valid_params) do
        {
          user: {
            name: user.name,
            email: user.email,
            password: user.password
          }
        }
      end

      it "returns 201 status code" do
        post_users_path
        expect(response).to have_http_status :created
      end

      it "returns json body" do
        post_users_path
        expect(json).to include(
          "name" => user.name,
          "email" => user.email
        )
      end

      it "create a new user" do
        expect { post_users_path }.to change(User, :count).by(1)
      end

      it "create a access_token" do
        expect { post_users_path }.to change(AccessToken, :count).by(1)
      end
    end
  end
end
