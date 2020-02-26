class Guild < ApplicationRecord
  validates :name, :uniqueness => {:case_sensitive => false}
  validates :name, :owner_id, presence: true
  validate :emblem_validation
  after_create :create_default_channel, :create_default_guild_membership
  has_one_attached :emblem
  has_many :channels
  has_many :guild_memberships
  has_many :guild_members,
    through: :guild_memberships
  belongs_to :owner,
    class_name: :Member,
    foreign_key: :owner_id
  
  validate :emblem_validation

  def emblem_validation
    if emblem.attached?
      if emblem.blob.byte_size > 1000000
        emblem.purge
        render json: ["Image too big"], status: 400
      end
    end
  end

  def create_default_channel
    Channel.create(name: 'general', guild_id: self.id)
  end

  def create_default_guild_membership
    self.guild_memberships.create(member_id: self.owner.id)
  end
end
