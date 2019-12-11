# frozen_string_literal: true

class RemoveIndexFromColumns < ActiveRecord::Migration[6.0]
  def change
    remove_index :columns, column: :name
  end
end
