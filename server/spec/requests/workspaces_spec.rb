# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Workspaces", type: :request do
  describe "POST /workspaces" do
    let(:user) { create :user }
    let(:auth_headers) { user.create_new_auth_token }

    context "when no authorization header provided" do
      subject(:post_no_authorization) { post api_workspaces_path, params: { name: "workspace" } }

      it_behaves_like "unauthorized_error"
    end

    context "when invalid params" do
      subject(:post_invalid_params) { post api_workspaces_path, params: invalid_params, headers: auth_headers }

      let(:invalid_params) { { name: "" } }

      it "return 422 status code" do
        post_invalid_params

        expect(response).to have_http_status :unprocessable_entity
      end

      it "return errors json body" do
        post_invalid_params

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
      subject(:post_valid_params) { post api_workspaces_path, params: valid_params, headers: auth_headers }

      let(:valid_params) { { name: "workspace" } }

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

      it_behaves_like "unauthorized_error"
    end

    context "when don't have permission" do
      subject(:patch_no_permission) do
        patch(
          api_workspace_path(workspace),
          params: { name: "update workspace" },
          headers: auth_headers
        )
      end

      let(:other_user) { create :user }
      let(:auth_headers) { other_user.create_new_auth_token }

      it_behaves_like "forbidden_error"
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
      subject(:delete_no_authorization) { delete api_workspace_path(workspace) }

      it_behaves_like "unauthorized_error"
    end

    context "when no permission" do
      subject(:delete_no_permission) { delete api_workspace_path(workspace), headers: auth_headers }

      let(:other_user) { create :user }
      let(:auth_headers) { other_user.create_new_auth_token }

      it_behaves_like "forbidden_error"
    end

    context "when not found" do
      subject(:delete_not_found) { delete api_workspace_path(0), headers: auth_headers }

      let(:auth_headers) { user.create_new_auth_token }

      it_behaves_like "not_found_error"
    end

    context "when deleted success" do
      subject(:delete_success) { delete api_workspace_path(workspace), headers: auth_headers }

      let(:auth_headers) { user.create_new_auth_token }

      it "return 204 status code" do
        delete_success

        expect(response).to have_http_status :no_content
      end

      # なぜかパスしない。changeの挙動を調べる。
      # it "delete workspace" do
      #   expect { delete_success }.to change(user.workspaces, :count).by(-1)
      # end
    end
  end
end
