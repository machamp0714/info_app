# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Tasks", type: :request do
  let(:user) { create :user }
  let(:auth_headers) { user.create_new_auth_token }
  let(:workspace) { create :workspace, user: user }
  let(:column) { create :column, workspace: workspace, user: user }
  let(:invalid_params) { { task: { content: "" } } }
  let(:valid_params) { { task: { content: "task content" } } }
  let(:task) { create :task, column: column, user: user }

  describe "POST /tasks" do
    context "when no authorization headers provided" do
      subject(:post_no_authorization) { post api_column_tasks_path(column) }

      it_behaves_like "unauthorized_error"
    end

    context "when no permission" do
      subject(:post_no_permission) do
        post(
          api_column_tasks_path(column),
          params: valid_params,
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
          api_column_tasks_path(column),
          params: invalid_params,
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
              "source" => "content",
              "message" => "を入力してください"
            }
          ]
        )
      end
    end

    context "when requests valid params" do
      subject(:post_valid_params) do
        post(
          api_column_tasks_path(column),
          params: valid_params,
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
          "content" => valid_params[:content]
        )
      end

      it "create a new task" do
        expect { post_valid_params }.to change(Task, :count).by(1)
      end
    end
  end

  describe "PATCH /tasks/:id" do
    context "when no authorization headers provided" do
      subject(:patch_no_authorization) { patch api_task_path(task) }

      it_behaves_like "unauthorized_error"
    end

    context "when no permission" do
      subject(:patch_no_permission) do
        patch(
          api_task_path(task),
          params: valid_params,
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
          api_task_path(task),
          params: invalid_params,
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
              "source" => "content",
              "message" => "を入力してください"
            }
          ]
        )
      end
    end

    context "when requests valid params" do
      subject(:patch_valid_params) do
        patch(
          api_task_path(task),
          params: valid_params,
          headers: auth_headers
        )
      end

      let(:valid_params) { { task: { content: "update task content" } } }

      it "return 200 status code" do
        patch_valid_params

        expect(response).to have_http_status :ok
      end

      it "return proper json" do
        patch_valid_params

        expect(json).to include(
          "content" => valid_params[:content]
        )
      end
    end
  end

  describe "DELETE api_task_path" do
    context "when no authorization headers provided" do
      subject(:delete_no_authorization) { delete api_task_path(task) }

      it_behaves_like "unauthorized_error"
    end

    context "when no permission" do
      subject(:delete_no_permission) { delete api_task_path(task), headers: auth_headers }

      let(:other_user) { create :user }
      let(:auth_headers) { other_user.create_new_auth_token }

      it_behaves_like "forbidden_error"
    end

    context "when delete success" do
      subject(:delete_success) { delete api_task_path(task), headers: auth_headers }

      it "return 204 status code" do
        delete_success

        expect(response).to have_http_status :no_content
      end
    end
  end
end
