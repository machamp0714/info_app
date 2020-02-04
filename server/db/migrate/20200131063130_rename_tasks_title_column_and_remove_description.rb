# frozen_string_literal: true

class RenameTasksTitleColumnAndRemoveDescription < ActiveRecord::Migration[6.0]
  def change
    rename_column :tasks, :title, :content
    remove_column :tasks, :description, :string
  end
end
