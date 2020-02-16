class Channel < ApplicationRecord
  validates :name, presence: true
  validates :guild_id, allow_nil: true
  belongs_to :guild
end
