class Task < ApplicationRecord
  belongs_to :column
  belongs_to :user
end
