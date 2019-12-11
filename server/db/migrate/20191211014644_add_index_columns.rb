class AddIndexColumns < ActiveRecord::Migration[6.0]
  def change
    add_index :columns, %i[id name], unique: true
  end
end
