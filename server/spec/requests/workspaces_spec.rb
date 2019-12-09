require 'rails_helper'

RSpec.describe "Workspaces", type: :request do
  describe "POST /workspaces" do
    let(:user) { create :user }
    let(:auth_headers) { user.create_new_auth_token }

    context "when no authorization header provided" do
      subject(:post_no_authorization) { post api_workspaces_path, params: { name: "workspace" } }

      it "return 403 status code" do
        post_no_authorization

        expect(response).to have_http_status :forbidden
      end

      it "return errors json body" do
        post_no_authorization

        expect(json).to include(
          "message" => "ログインしてください"
        )
      end
    end

    context "when invalid params" do
      let(:invalid_params) { { name: "" } }

      subject(:post_invalid_params) { post api_workspaces_path, params: invalid_params, headers: auth_headers }

      it "return 422 status code" do
        post_invalid_params

        expect(response).to have_http_status :unprocessable_entity
      end

      it "return errors json body" do
        post_invalid_params

        expect(response).to include(
          "errors" => [
            {
              "source" => "name",
              "message" => "を入力してください"
            }
          ]
        )
      end
    end

    context "when valid params" do
      let(:valid_params) { { name: "workspace"} }

      subject(:post_valid_params) { post api_workspaces_path, params: valid_params, headers: auth_headers }

      it "return 201 status code" do
        post_valid_params

        expect(response).to have_http_status :created
      end

      it "return proper json body" do
        post_valid_params

        expect(json).to include(
          "name" => "workspace",
          "user" => {
            "name" => user.name,
            "email" => user.email,
            "image" => user.image
          }
        )
      end
    end
  end
end
