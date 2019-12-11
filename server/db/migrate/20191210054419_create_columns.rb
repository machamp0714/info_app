# frozen_string_literal: true

class CreateColumns < ActiveRecord::Migration[6.0]
  def change
    create_table :columns do |t|
      t.string :name, null: false
      t.references :workspace, null: false, foreign_key: true

      t.timestamps
    end

    add_index :columns, :name, unique: true
  end
end
