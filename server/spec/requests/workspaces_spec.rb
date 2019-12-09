require 'rails_helper'

RSpec.describe "Workspaces", type: :request do
  describe "POST /workspaces" do
    let(:user) { create :user }
    let(:auth_headers) { user.create_new_auth_token }

    context "when no authorization header provided" do
      subject(:post_no_authorization) { post api_workspaces_path, params: { name: "workspace" } }

      it "return 401 status code" do
        post_no_authorization

        expect(response).to have_http_status :unauthorized
      end

      it "return errors json body" do
        post_no_authorization

        expect(json).to include(
          "errors" => ["アカウント登録もしくはログインしてください。"]
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

        expect(json).to include(
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
      let(:valid_params) { { name: "workspace" } }

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

  describe "PATCH /workspace/:id" do
    let(:user) { create :user }
    let(:auth_headers) { user.create_new_auth_token }
    let(:workspace) { create :workspace, user: user }

    context "when no authorized headers provided" do
      subject(:patch_no_authorization) { patch api_workspace_path(workspace) }

      it "return 401 status code" do
        patch_no_authorization

        expect(response).to have_http_status :unauthorized
      end
    end

    context "don't have permission" do
      let(:other_user) { create :user }
      let(:auth_headers) { other_user.create_new_auth_token }

      subject(:patch_no_permission) do
        patch(
          api_workspace_path(workspace),
          params: { name: "update workspace" },
          headers: auth_headers
        )
      end

      it "return 403 status code" do
        patch_no_permission

        expect(response).to have_http_status :forbidden
      end

      it "return forbidden error json" do
        patch_no_permission

        expect(json).to include(
          "status" => 403,
          "message" => "権限がありません"
        )
      end
    end

    context "when invalid params" do
      subject(:patch_invalid_params) do
        patch(
          api_workspace_path(workspace),
          params: { name: "" },
          headers: auth_headers
        )
      end

      it "return 422 status code" do
        patch_invalid_params

        expect(response).to have_http_status :unprocessable_entity
      end

      it "return errors json" do
        patch_invalid_params

        expect(json).to include(
          "status" => 422,
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
      subject(:patch_valid_params) do
        patch(
          api_workspace_path(workspace),
          params: { name: "update workspace" },
          headers: auth_headers
        )
      end

      it "return 200 status code" do
        patch_valid_params

        expect(response).to have_http_status :ok
      end

      it "return proper json body" do
        patch_valid_params

        expect(json).to include(
          "name" => "update workspace",
          "user" => {
            "name" => user.name,
            "email" => user.email,
            "image" => user.image
          }
        )
      end
    end
  end

  describe "DELETE /workspace/:id" do
    let(:user) { create :user }
    let(:workspace) { create :workspace, user: user }

    context "when no authorized headers provided" do
      it "return 401 status code" do
        delete api_workspace_path(workspace)

        expect(response).to have_http_status :unauthorized
      end
    end

    context "when no permission" do
      let(:other_user) { create :user }
      let(:auth_headers) { other_user.create_new_auth_token }

      subject(:delete_no_permission) { delete api_workspace_path(workspace), headers: auth_headers }

      it "return 403 status code" do
        delete_no_permission

        expect(response).to have_http_status :forbidden
      end

      it "return permission errors json" do
        delete_no_permission

        expect(json).to include(
          "status" => 403,
          "message" => "権限がありません"
        )
      end
    end

    context "when not found" do
      let(:auth_headers) { user.create_new_auth_token }
      subject(:delete_not_found) { delete api_workspace_path, headers: auth_headers }

      it "return 404 status code" do
        delete_not_found

        expect(response).to have_http_status :not_found
      end

      it "return not found errors json" do
        delete_not_found

        expect(json).to include(
          "status" => 404,
          "message" => "Not found"
        )
      end
    end

    context "when deleted success" do
      let(:auth_headers) { user.create_new_auth_token }
      subject(:delete_success) { delete api_workspace_path(workspace), headers: auth_headers }

      it "return 204 status code" do
        delete_success

        expect(response).to have_http_status :no_content
      end
    end
  end
end
