class Channel < ApplicationRecord
  validates :name, presence: true
  validates :guild_id, presence: true, allow_nil: true
  has_many :dmmemberships
  belongs_to :guild
end
