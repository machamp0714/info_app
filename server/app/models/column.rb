# frozen_string_literal: true

class Column < ApplicationRecord
  belongs_to :workspace

  validates :name, presence: true
end
