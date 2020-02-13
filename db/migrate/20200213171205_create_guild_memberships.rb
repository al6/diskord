class CreateGuildMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :guild_memberships do |t|
      t.integer :member_id
      t.integer :guild_id

      t.timestamps
    end
  end
end
