# frozen_string_literal: true

class Task < ApplicationRecord
  belongs_to :column
  belongs_to :user

  validates :title, presence: true
end
