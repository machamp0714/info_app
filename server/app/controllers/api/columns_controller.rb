# frozen_string_literal: true

class Api::ColumnsController < ApplicationController
  before_action :authenticate_api_user!
  before_action :verify_permission, only: %i[create]
  before_action :verify_column, only: %i[update]

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
    workspace = Workspace.find(params[:workspace_id])
    column = workspace.columns.find(params[:id])

    if column.update(column_params)
      render json: column, status: :ok
    else
      render_errors(column)
    end
  end

  def destroy
    workspace = Workspace.find(params[:workspace_id])
    workspace.columns.find(params[:id]).destroy

    head :no_content
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

  def verify_column
    column = Column.find(params[:id])
    return if column.user_id == current_api_user.id

    render_permission_error
  end
end
