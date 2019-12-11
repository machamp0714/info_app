# frozen_string_literal: true

class RemoveUniqueIndexFromWorkspaces < ActiveRecord::Migration[6.0]
  def change
    remove_index :workspaces, column: %i[id name]
  end
end
