# frozen_string_literal: true

class Api::WorkspacesController < ApplicationController
  before_action :authenticate_api_user!
  before_action :verify_permission, only: %i[show update destroy]
  before_action :session_clear

  def index
    workspaces = current_api_user.workspaces

    render json: workspaces, status: :ok
  end

  def create
    workspace = current_api_user.workspaces.build(workspace_params)
    if workspace.save
      render json: workspace, status: :created
    else
      render_errors(workspace)
    end
  end

  def show
    workspace = current_api_user.workspaces.find(params[:id])

    render json: workspace, status: :ok
  end

  def update
    workspace = Workspace.find(params[:id])

    if workspace.update(workspace_params)
      render json: workspace, status: :ok
    else
      render_errors(workspace)
    end
  end

  def destroy
    workspace = current_api_user.workspaces.find(params[:id])
    workspace.destroy

    head :no_content
  end

  private

  def workspace_params
    params.permit(:name)
  end

  def verify_permission
    workspace = Workspace.find(params[:id])
    return if workspace.user_id == current_api_user.id

    render_permission_error
  end
end
