class Api::TasksController < ApplicationController
  before_action :authenticate_api_user!
  before_action :verify_permission

  def create; end

  private

  def verify_permission
    workspace = Workspace.find(params[:workspace_id])
    return if workspace.user_id == current_api_user.id

    render_permission_error
  end
end
