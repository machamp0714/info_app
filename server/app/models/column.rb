# frozen_string_literal: true

class Column < ApplicationRecord
  belongs_to :workspace
  has_many :tasks, dependent: :destroy

  validates :name, presence: true
end
