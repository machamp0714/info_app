# frozen_string_literal: true

class AddUrlAndDescriptionToTask < ActiveRecord::Migration[6.0]
  def change
    add_column :tasks, :url, :text
    add_column :tasks, :description, :text
  end
end
