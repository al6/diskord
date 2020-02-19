class CreateDmMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :dm_memberships do |t|
      t.integer :channel_id
      t.integer :first_member_id
      t.integer :second_member_id

      t.timestamps
    end
  end
end
