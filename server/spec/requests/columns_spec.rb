require 'rails_helper'

RSpec.describe "Columns", type: :request do
  describe "POST /api/workspace/:id/columns" do
    let(:user) { create :user }
    let(:auth_headers) { user.create_new_auth_token }
    let(:workspace) { create :workspace, user: user }

    context "when no authorization headers provided" do
      subject(:post_no_authorization) { post api_workspace_columns_path(workspace) }

      it_behaves_like "unauthorized_error"
    end

    context "when don't have permission" do
      subject(:post_no_permission) do
        post(
          api_workspace_columns_path(workspace),
          params: { name: "column" },
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
          params: { name: "" },
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
          params: { name: "column" },
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
            "name" => workspace.name
          }
        )
      end
    end
  end
end
