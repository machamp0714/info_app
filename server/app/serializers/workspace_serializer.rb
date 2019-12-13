# frozen_string_literal: true

class WorkspaceSerializer < ActiveModel::Serializer
  attributes :id, :name

  belongs_to :user
end
