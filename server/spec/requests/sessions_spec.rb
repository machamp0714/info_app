require 'rails_helper'

RSpec.describe "Sessions", type: :request do
  describe "POST /login" do
    let(:user) { create :user }

    context "when invalid params" do
      let(:invalid_params) { { user: { email: "", password: "" } } }
      subject(:login_path) { post api_sessions_path, params: invalid_params }

      it "should return 401 status code" do
        login_path

        expect(response).to have_http_status :created
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
      let(:valid_params) { { user: { email: user.email, password: user.password } } }
      subject(:login_path) { post api_sessions_path, params: valid_params }

      it "should return 200 status code" do
        login_path

        expect(response).to have_http_status :ok
      end
    end
  end
end
