class Message < ApplicationRecord
  validates :body, :author_id, :channel_id, presence: true
  validates :body, length: {maximum: 100}
  validate :image_validation
  has_one_attached :image

  def image_validation
    if image.attached?
      if image.blob.byte_size > 5000000
        image.purge
        render json: ["Image too big"], status: 400
      end
    end
  end

  belongs_to :author,
    class_name: :Member,
    foreign_key: :author_id,
    primary_key: :id

  belongs_to :channel
end
