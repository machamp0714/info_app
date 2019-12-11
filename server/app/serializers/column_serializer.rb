# frozen_string_literal: true

class ColumnSerializer < ActiveModel::Serializer
  attributes :name

  belongs_to :workspace
end
