# frozen_string_literal: true

class TaskSerializer < ActiveModel::Serializer
  attributes :id, :content, :url, :description, :created_at, :updated_at
end
