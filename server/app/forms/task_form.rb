# frozen_string_literal: true

class TaskForm
  include ActiveModel::Model

  attr_accessor :content, :description, :url, :tasks, :user_id

  def build
    task.assign_attributes(
      content: content,
      url: url,
      description: description,
      user_id: user_id
    )
    merge_rank

    task
  end

  private

  def task
    @task ||= tasks.build
  end

  def merge_rank
    task.rank = if tasks.exists?
                  tasks.maximum(:rank) + 1
                else
                  1
                end
  end
end
