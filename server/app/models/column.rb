class Column < ApplicationRecord
  belongs_to :workspace

  validates :name, presence: true, uniqueness: { case_sensitive: false }
end
