class Guild < ApplicationRecord
  validates :name, uniqueness: true
  validates :name, :owner_id, presence: true

  belongs_to :member,
    foreign_key: :owner_id
end
