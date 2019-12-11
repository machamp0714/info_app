class Api::TasksController < ApplicationController
  before_action :authenticate_api_user!
  before_action :verify_permission

  def create
    workspace = current_api_user.workspaces.find(params[:workspace_id])
    column = workspace.columns.find(params[:column_id])
    task = column.tasks.build(task_params.merge(user_id: current_api_user.id))

    if task.save
      render json: task, status: :created
    else
      render_errors(task)
    end
  end

  private

  def task_params
    params.permit(:title, :description)
  end

  def verify_permission
    workspace = Workspace.find(params[:workspace_id])
    return if workspace.user_id == current_api_user.id

    render_permission_error
  end
end
