class AddDefaultColumns < ActiveRecord::Migration[6.0]
  def change
    change_column :columns, :user_id, :bigint, default: nil
  end
end
