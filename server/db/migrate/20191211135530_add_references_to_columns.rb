# frozen_string_literal: true

class AddReferencesToColumns < ActiveRecord::Migration[6.0]
  def change
    add_reference :columns, :user, foreign_key: true
  end
end
