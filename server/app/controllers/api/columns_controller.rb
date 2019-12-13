# frozen_string_literal: true

class Api::ColumnsController < ApplicationController
  before_action :authenticate_api_user!
  before_action :verify_permission, only: %i[create]
  before_action :verify_column, only: %i[update destroy]

  def index
    workspace = Workspace.find(params[:workspace_id])
    columns = workspace.columns

    render json: columns, status: :ok
  end

  def create
    workspace = Workspace.find(params[:workspace_id])
    column = workspace.columns.build(column_params.merge(user_id: current_api_user.id))

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

  def destroy
    Column.find(params[:id]).destroy

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
