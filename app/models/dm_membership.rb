class DmMembership < ApplicationRecord
  validates :first_member_id, :second_member_id, presence: true
  validates :channel_id, presence: true, allow_nil: true
  validates_uniqueness_of :first_member_id, :scope => [:second_member_id]

  after_create :create_dm_channel

  belongs_to :channel, optional: true

  belongs_to :first_member,
    class_name: :Member,
    foreign_key: :first_member_id
  
  belongs_to :second_member,
    class_name: :Member,
    foreign_key: :second_member_id

  def create_dm_channel
    new_channel = Channel.create(name: self.second_member.username)
    self.update(channel_id: new_channel.id)
  end
end

