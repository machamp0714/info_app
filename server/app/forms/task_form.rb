# frozen_string_literal: true

class TaskForm
  include ActiveModel::Model

  attr_accessor :content, :user_id, :confirm, :tasks

  def build
    if confirm
      create_blog_card
    else
      task.assign_attributes(content: content, user_id: user_id)
    end
    merge_rank
    task
  end

  private

  def task
    @task ||= tasks.build
  end

  def create_blog_card
    response = Faraday.get(content)
    ogp = OGP::OpenGraph.new(response.body)

    task.assign_attributes(content: ogp.title, user_id: user_id)
  end

  def merge_rank
    task.rank = if tasks.exists?
                  tasks.maximum(:rank) + 1
                else
                  1
                end
  end
end
