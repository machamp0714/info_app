require 'rails_helper'

RSpec.describe "Sessions", type: :request do
  describe "POST /api/auth/sign_in" do
    let(:user) { create :user }

    context "when invalid params" do
      let(:invalid_params) { { email: "", password: "" } }
      subject(:login_path) { post api_user_session_path, params: invalid_params }

      it "should return 401 status code" do
        login_path

        expect(response).to have_http_status :unauthorized
      end

      it "should return errors json" do
        login_path

        expect(json).to include({
          "status" => 401,
          "message" => "メールアドレスかパスワードが間違っています。"
        })
      end
    end

    context "when valid params" do
      let(:valid_params) { { email: user.email, password: user.password } }
      subject(:login_path) { post api_user_session_path, params: valid_params }

      it "should return 200 status code" do
        login_path

        expect(response).to have_http_status :ok
      end

      it "gives you to access_token if login success" do
        login_path

        expect(response.has_header?("access-token")).to be_truthy
      end
    end
  end
end
