class Channel < ApplicationRecord
  validates :name, presence: true
  validates :guild_id, presence: true, allow_nil: true
  belongs_to :guild
end
