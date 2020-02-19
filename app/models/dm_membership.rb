class DmMembership < ApplicationRecord
  validates :channel_id, :first_member_id, :second_member_id, presence: true
  belongs_to: :member,
    foreign_key: :first_member_id
end
