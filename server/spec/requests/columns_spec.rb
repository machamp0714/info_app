# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Columns", type: :request do
  let(:user) { create :user }
  let(:auth_headers) { user.create_new_auth_token }
  let(:workspace) { create :workspace, user: user }
  let(:column) { create :column, workspace: workspace, user: user }

  describe "GET /api/workspace/:id/columns" do
    context "when no authorized" do
      subject(:get_unauthorized) { get api_workspace_columns_path(workspace) }

      it_behaves_like "unauthorized_error"
    end

    context "when get success" do
      subject(:get_success) { get api_workspace_columns_path(workspace), headers: auth_headers }

      it "return 200 status code" do
        get_success

        expect(response).to have_http_status :ok
      end
    end
  end

  describe "POST /api/workspace/:id/columns" do
    context "when no authorization headers provided" do
      subject(:post_no_authorization) { post api_workspace_columns_path(workspace) }

      it_behaves_like "unauthorized_error"
    end

    context "when don't have permission" do
      subject(:post_no_permission) do
        post(
          api_workspace_columns_path(workspace),
          params: { column: { name: "column" } },
          headers: auth_headers
        )
      end

      let(:other_user) { create :user }
      let(:auth_headers) { other_user.create_new_auth_token }

      it_behaves_like "forbidden_error"
    end

    context "when requests invalid params" do
      subject(:post_invalid_params) do
        post(
          api_workspace_columns_path(workspace),
          params: { column: { name: "" } },
          headers: auth_headers
        )
      end

      it "return 422 status code" do
        post_invalid_params

        expect(response).to have_http_status :unprocessable_entity
      end

      it "return proper errors json" do
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

    context "when requests valid params" do
      subject(:post_valid_params) do
        post(
          api_workspace_columns_path(workspace),
          params: { column: { name: "column" } },
          headers: auth_headers
        )
      end

      it "return 201 status code" do
        post_valid_params

        expect(response).to have_http_status :created
      end

      it "return proper json" do
        post_valid_params

        expect(json).to include(
          "name" => "column",
          "workspace" => {
            "id" => workspace.id,
            "name" => workspace.name
          }
        )
      end
    end
  end

  describe "PATCH /api/workspace/:workspace_id/columns/:id" do
    context "when no authorization headers provided" do
      subject(:patch_no_authorization) { patch api_column_path(column) }

      it_behaves_like "unauthorized_error"
    end

    context "when don't have permission" do
      subject(:patch_no_permission) do
        patch(
          api_column_path(column),
          params: { column: { name: "update column" } },
          headers: auth_headers
        )
      end

      let(:other_user) { create :user }
      let(:auth_headers) { other_user.create_new_auth_token }

      it_behaves_like "forbidden_error"
    end

    context "when requests invalid params" do
      subject(:patch_invalid_params) do
        patch(
          api_column_path(column),
          params: { column: { name: "" } },
          headers: auth_headers
        )
      end

      it "return 422 status code" do
        patch_invalid_params

        expect(response).to have_http_status :unprocessable_entity
      end

      it "return proper errors json" do
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

    context "when requests valid params" do
      subject(:patch_valid_params) do
        patch(
          api_column_path(column),
          params: { column: { name: "update column" } },
          headers: auth_headers
        )
      end

      it "return 200 status code" do
        patch_valid_params

        expect(response).to have_http_status :ok
      end

      it "return proper json" do
        patch_valid_params

        expect(json).to include(
          "id" => column.id,
          "name" => "update column",
          "workspace" => {
            "id" => workspace.id,
            "name" => workspace.name
          }
        )
      end
    end
  end

  describe "DELETE /api/workspace/:workspace_id/columns/:id" do
    context "when no authorization headers provided" do
      subject(:delete_no_authorization) { delete api_column_path(column) }

      it_behaves_like "unauthorized_error"
    end

    context "when don't have permission" do
      subject(:delete_no_permission) do
        delete(
          api_column_path(column),
          headers: auth_headers
        )
      end

      let(:other_user) { create :user }
      let(:auth_headers) { other_user.create_new_auth_token }

      it_behaves_like "forbidden_error"
    end

    context "when delete success" do
      subject(:delete_success) do
        delete(
          api_column_path(column),
          headers: auth_headers
        )
      end

      it "return 204 status code" do
        delete_success

        expect(response).to have_http_status :no_content
      end
    end
  end
end
