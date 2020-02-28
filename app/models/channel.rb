class Channel < ApplicationRecord
  validates :name, presence: true
  validates :guild_id, presence: true, allow_nil: true
  has_many :dm_memberships
  has_many :members,
    through: :dm_memberships,
    source: :member
  belongs_to :guild
end
