# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Sessions", type: :request do
  let(:user) { create :user }

  describe "POST /api/auth/sign_in" do
    context "when invalid params" do
      subject(:login_path) { post api_user_session_path, params: invalid_params }

      let(:invalid_params) { { email: "", password: "" } }

      it "returns 401 status code" do
        login_path

        expect(response).to have_http_status :unauthorized
      end

      it "returns errors json" do
        login_path

        expect(json).to include(
          "status" => 401,
          "message" => "メールアドレスかパスワードが間違っています。"
        )
      end
    end

    context "when valid params" do
      subject(:login_path) { post api_user_session_path, params: valid_params }

      let(:valid_params) { { email: user.email, password: user.password } }

      it "returns 200 status code" do
        login_path

        expect(response).to have_http_status :ok
      end

      it "gives you to access_token if login success" do
        login_path

        expect(response).to have_header("access-token")
      end
    end
  end

  describe "#DELETE /api/auth/sign_out" do
    subject(:login_path) { post api_user_session_path, params: valid_params }

    let(:valid_params) { { email: user.email, password: user.password } }

    context "when token is valid" do
      it "returns 204 status code" do
        auth_headers = user.create_new_auth_token
        delete destroy_api_user_session_path, headers: auth_headers

        expect(response).to have_http_status :no_content
      end
    end

    context "when token is invalid" do
      it "sould return 404 status code" do
        delete destroy_api_user_session_path

        expect(response).to have_http_status :not_found
      end
    end
  end
end
