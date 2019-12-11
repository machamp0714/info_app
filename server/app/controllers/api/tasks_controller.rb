class Api::TasksController < ApplicationController
  before_action :authenticate_api_user!
  before_action :verify_permission, only: %i[create]
  before_action :verify_task, only: %i[update]

  def create
    column = Column.find(params[:column_id])
    task = column.tasks.build(task_params.merge(user_id: current_api_user.id))

    if task.save
      render json: task, status: :created
    else
      render_errors(task)
    end
  end

  def update; end

  private

  def task_params
    params.permit(:title, :description)
  end

  def verify_permission
    column = Column.find(params[:column_id])
    return if column.user_id == current_api_user.id

    render_permission_error
  end

  def verify_task
    task = Task.find(params[:id])
    return if task.user_id == current_api_user.id

    render_permission_error
  end
end
