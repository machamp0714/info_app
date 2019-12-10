# frozen_string_literal: true

class WorkspaceSerializer < ActiveModel::Serializer
  attributes :name

  belongs_to :user
end
