class Message < ApplicationRecord
  validates :body, :author_id, :channel_id, presence: true
  validates :body, length: {maximum: 100}
  
  belongs_to :author,
    class_name: :Member,
    foreign_key: :author_id,
    primary_key: :id

  belongs_to :channel
end
