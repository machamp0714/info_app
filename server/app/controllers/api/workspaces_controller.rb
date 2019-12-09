class Api::WorkspacesController < ApplicationController
  before_action :authenticate_api_user!

  def create
    workspace = current_api_user.workspaces.build(workspace_params)
    if workspace.save
      render json: workspace, status: :created
    else
      render_errors(workspace, :unprocessable_entity)
    end
  end

  private

  def workspace_params
    params.permit(:name)
  end
end
