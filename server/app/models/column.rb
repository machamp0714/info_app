# frozen_string_literal: true

class Column < ApplicationRecord
  belongs_to :workspace
  belongs_to :user
  has_many :tasks, dependent: :destroy

  validates :name, presence: true
end
