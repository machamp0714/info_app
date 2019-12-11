# frozen_string_literal: true

class RemoveIndexFromWorkspace < ActiveRecord::Migration[6.0]
  def change
    remove_index :workspaces, column: :name
  end
end
