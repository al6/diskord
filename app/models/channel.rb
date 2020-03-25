class Channel < ApplicationRecord
  validates :name, presence: true
  validates :guild_id, presence: true, allow_nil: true
  has_many :dm_memberships
  has_many :first_members,
    through: :dm_memberships,
    source: :first_member
  has_many :second_members,
    through: :dm_memberships,
    source: :second_member
  belongs_to :guild, optional: true
end
