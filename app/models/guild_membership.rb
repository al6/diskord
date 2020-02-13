class GuildMembership < ApplicationRecord
  validates :member_id, :guild_id, presence: true
  belongs_to :member
  belongs_to :guild
end
