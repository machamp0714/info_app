# frozen_string_literal: true

class Workspace < ApplicationRecord
  belongs_to :user
  has_many :columns, dependent: :destroy

  validates :name, presence: true
end
