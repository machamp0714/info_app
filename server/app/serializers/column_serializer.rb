# frozen_string_literal: true

class ColumnSerializer < ActiveModel::Serializer
  attributes :id, :name

  belongs_to :workspace
end
