class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :body
      t.integer :author_id
      t.integer :channel_id

      t.timestamps
    end
  end
end
