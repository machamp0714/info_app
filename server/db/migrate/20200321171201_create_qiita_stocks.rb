class CreateQiitaStocks < ActiveRecord::Migration[6.0]
  def change
    create_table :qiita_stocks do |t|
      t.string :title, null: false
      t.text :url, null: false
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
