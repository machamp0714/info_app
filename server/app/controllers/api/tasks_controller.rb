# frozen_string_literal: true

class Api::TasksController < ApplicationController
  before_action :authenticate_api_user!
  before_action :verify_permission, only: %i[index create]
  before_action :verify_task, only: %i[update destroy]
  before_action :session_clear

  def index
    column = Column.find(params[:column_id])
    tasks = column.tasks.rank

    render json: tasks, status: :ok
  end

  def create
    column = Column.find(params[:column_id])
    tasks = column.tasks
    task = tasks.build(task_params.merge(user_id: current_api_user.id))
    task.rank = if tasks.exists?
                  tasks.maximum(:rank) + 1
                else
                  1
                end

    if task.save
      render json: task, status: :created
    else
      render_errors(task)
    end
  end

  def update
    task = Task.find(params[:id])

    if task.update(task_params)
      render json: task, status: :ok
    else
      render_errors(task)
    end
  end

  def destroy
    Task.find(params[:id]).destroy

    head :no_content
  end

  private

  def task_params
    params.require(:task).permit(:content)
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
