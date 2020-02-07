class CreateMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :members do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :session_token
      t.timestamps
    end
    add_index :members, :username, unique: true
    add_index :members, :email, unique: true
    add_index :members, :session_token, unique: true
  end
end
