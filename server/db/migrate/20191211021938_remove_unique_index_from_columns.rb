class RemoveUniqueIndexFromColumns < ActiveRecord::Migration[6.0]
  def change
    remove_index :columns, column: %i[id name]
  end
end
