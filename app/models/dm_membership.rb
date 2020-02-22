class DmMembership < ApplicationRecord
  validates :channel_id, :first_member_id, :second_member_id, presence: true
  belongs_to: :member,
    foreign_key: :first_member_id
  validates_uniqueness_of :first_member_id, :scope => [:second_member_id]
  
  belongs_to :channel

  belongs_to :first_member,
    class_name: :Member,
    foreign_key: :member_id
  
  belongs_to :second_member,
    class_name: :Member,
    foreign_key: :member_id
end

