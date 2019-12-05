class CreateAccessTokens < ActiveRecord::Migration[6.0]
  def change
    create_table :access_tokens do |t|
      t.string :token, null: false
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end

    add_index :access_tokens, :token, unique: true
  end
end
