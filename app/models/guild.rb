class Guild < ApplicationRecord
  validates :name, uniqueness: true
  validates :name, :owner_id, presence: true

  has_many :guild_memberships
  has_many :guild_members,
    through: :guild_memberships
  belongs_to :member,
    foreign_key: :owner_id
end
