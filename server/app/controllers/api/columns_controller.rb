class Api::ColumnsController < ApplicationController
  before_action :authenticate_api_user!
  before_action :verify_permission

  def create
    workspace = Workspace.find(params[:workspace_id])
    column = workspace.columns.build(column_params)

    if column.save
      render json: column, status: :created
    else
      render_errors(column)
    end
  end

  def update
    column = Column.find(params[:id])

    if column.update(column_params)
      render json: column, status: :ok
    else
      render_errors(column)
    end
  end

  private

  def column_params
    params.permit(:name)
  end

  def verify_permission
    workspace = Workspace.find(params[:workspace_id])
    return if workspace.user_id == current_api_user.id

    render_permission_error
  end
end
