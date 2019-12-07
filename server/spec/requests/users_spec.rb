# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Users", type: :request do
  describe "POST /users" do
    context "when params invalid" do
      subject(:post_users_path) { post api_user_registration_path, params: invalid_params }

      let(:invalid_params) do
        {
          name: "",
          email: "",
          password: ""
        }
      end

      it "returns 422 status code" do
        post_users_path
        expect(response).to have_http_status :unprocessable_entity
      end

      it "returns errors json" do
        post_users_path

        expect(json).to eq(
          "errors" => {
            "password" => [
              "can't be blank"
            ],
            "name" => [
              "can't be blank"
            ],
            "email" => [
              "can't be blank"
            ]
          }
        )
      end
    end

    context "when valid params" do
      subject(:post_users_path) { post api_user_registration_path, params: valid_params }

      let(:user) { build :user }
      let(:valid_params) do
        {
          name: user.name,
          email: user.email,
          password: user.password
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
    end
  end
end
