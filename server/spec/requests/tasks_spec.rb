require 'rails_helper'

RSpec.describe "Tasks", type: :request do
  let(:user) { create :user }
  let(:auth_headers) { user.create_new_auth_token }
  let(:workspace) { create :workspace, user: user }
  let(:column) { create :column, workspace: workspace }
  let(:invalid_params) { { title: "" } }
  let(:valid_params) { { title: "task", description: "task memo" } }

  describe "POST /tasks" do
    context "when no authorization headers provided" do
      subject(:post_no_authorization) { post tasks_path(workspace, column) }

      it_behaves_like "unauthorized_error"
    end

    context "when no permission" do
      subject(:post_no_permission) do
        post(
          tasks_path(workspace, column),
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
          tasks_path(workspace, column),
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
              "source" => "title",
              "message" => "を入力してください"
            }
          ]
        )
      end
    end

    context "when requests valid params" do
      subject(:post_valid_params) do
        post(
          tasks_path(workspace, column),
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
          "title" => valid_params[:title],
          "description" => valid_params[:description],
          "column" => {
            "name" => column.name
          }
        )
      end

      it "create a new task" do
        expect { post_valid_params }.to change(Task, :count).by(1)
      end
    end
  end

  describe "PATCH /tasks/:id" do
    let(:task) { create :task, column: column, user: user }

    context "when no authorization headers provided" do
      subject(:patch_no_authorization) { patch task_path(workspace, column, task) }

      it_behaves_like "unauthorized_error"
    end

    context "when no permission" do
      subject(:patch_no_permission) do
        patch(
          task_path(workspace, column, task),
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
          task_path(workspace, column, task),
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
              "source" => "title",
              "message" => "を入力してください"
            }
          ]
        )
      end
    end

    context "when requests valid params" do
      subject(:patch_valid_params) do
        patch(
          task_path(workspace, column, task),
          params: valid_params,
          headers: auth_headers
        )
      end

      let(:valid_params) { { title: "update", description: "update" } }

      it "return 200 status code" do
        patch_valid_params

        expect(response).to have_http_status 200
      end

      it "return proper json" do
        patch_valid_params

        expect(json).to include(
          "title" => valid_params[:title],
          "description" => valid_params[:description],
          "column" => {
            "name" => column.name
          }
        )
      end
    end
  end

  def tasks_path(workspace, column)
    api_workspace_column_tasks_path(workspace, column)
  end

  def task_path(workspace, column, task)
    api_workspace_column_task_path(workspace, column, task)
  end
end
