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

        expect(json).to include(
          "status" => 422,
          "errors" => [
            {
              "source" => "password",
              "message" => "を入力してください"
            },
            {
              "source" => "email",
              "message" => "を入力してください"
            },
            {
              "source" => "name",
              "message" => "を入力してください"
            }
          ]
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

      it "gives access-token in header" do
        post_users_path

        expect(response).to have_header("access-token")
      end
    end
  end

  describe "GET /current_user" do
    context "when no authorized" do
      subject(:get_unauthorized) { get api_current_user_path }

      it "return 401 status code" do
        get_unauthorized

        expect(response).to have_http_status :unauthorized
      end

      it "return proper error json" do
        get_unauthorized

        expect(json).to include(
          "status" => 401,
          "message" => "アカウント登録もしくはログインしてください"
        )
      end
    end

    context "when requests with authorized header" do
      let(:user) { create :user }
      let(:auth_headers) { user.create_new_auth_token }
      subject(:get_current_user) { get api_current_user_path, headers: auth_headers }

      it "return 200 status code" do
        get_current_user

        expect(response).to have_http_status 200
      end

      it "return current user json" do
        get_current_user

        expect(json).to include({
          "name" => user.name,
          "email" => user.email,
          "image" => user.image
        })
      end
    end
  end
end
