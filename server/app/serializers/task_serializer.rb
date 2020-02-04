# frozen_string_literal: true

class TaskSerializer < ActiveModel::Serializer
  attributes :id, :content, :created_at, :updated_at
end
