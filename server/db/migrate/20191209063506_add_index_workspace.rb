# frozen_string_literal: true

class AddIndexWorkspace < ActiveRecord::Migration[6.0]
  def change
    add_index :workspaces, :name, unique: true
  end
end
