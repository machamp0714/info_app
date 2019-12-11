# frozen_string_literal: true

class AddIndexWorkspaces < ActiveRecord::Migration[6.0]
  def change
    add_index :workspaces, %i[id name], unique: true
  end
end
