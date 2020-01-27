# frozen_string_literal: true

class WorkspaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :created_at, :updated_at

  belongs_to :user
  has_many :columns
end
