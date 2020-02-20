class GuildMembership < ApplicationRecord
  validates :member_id, :guild_id, presence: true
  validates_uniqueness_of :member_id, :scope => [:guild_id]
  belongs_to :guild_member,
    class_name: :Member,
    foreign_key: :member_id
  belongs_to :guild
end
