class Api::WorkspacesController < ApplicationController
  before_action :authenticate_api_user!
  before_action :verify_permission, only: %i[update destroy]

  def create
    workspace = current_api_user.workspaces.build(workspace_params)
    if workspace.save
      render json: workspace, status: :created
    else
      render_errors(workspace, :unprocessable_entity)
    end
  end

  def update
    workspace = Workspace.find(params[:id])

    if workspace.update(workspace_params)
      render json: workspace, status: :ok
    else
      render_errors(workspace, :unprocessable_entity)
    end
  end

  def destroy; end

  private

  def workspace_params
    params.permit(:name)
  end

  def verify_permission
    workspace = Workspace.find(params[:id])
    return if workspace.user_id == current_api_user.id

    render json: { status: 403, message: "権限がありません" }, status: :forbidden
  end
end
