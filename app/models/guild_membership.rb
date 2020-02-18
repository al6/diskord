class GuildMembership < ApplicationRecord
  validates :member_id, :guild_id, presence: true
  belongs_to :guild_member,
    class_name: :Member,
    foreign_key: :member_id
  belongs_to :guild
end
