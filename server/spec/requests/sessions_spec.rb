require 'rails_helper'

RSpec.describe "Sessions", type: :request do
  describe "POST /login" do
    let(:user) { create :user }

    context "when invalid params" do
      let(:invalid_params) { { session: { email: "", password: "" } } }
      subject(:login_path) { post api_user_sessions_path, params: invalid_params }

      it "should return 401 status code" do
        login_path

        expect(response).to have_http_status :unauthorized
      end

      it "should return errors json" do
        login_path

        expect(json).to include({
          "status" => 401,
          "title" => "メールアドレスかパスワードが間違っています。"
        })
      end
    end

    context "when valid params" do
      let(:valid_params) { { session: { email: user.email, password: user.password } } }
      subject(:login_path) { post api_user_session_path, params: valid_params }

      it "should return 201 status code" do
        login_path

        expect(response).to have_http_status :created
      end
    end
  end
end
