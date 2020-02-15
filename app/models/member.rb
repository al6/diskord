class Member < ApplicationRecord
  validates :email, :username, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true, 'valid_email_2/email': true
  validates :password, length: { minimum: 6, allow_nil: true }
  
  has_many :guild_memberships
  has_many :guilds,
    through: :guild_memberships,
    source: :guild

  after_initialize :ensure_session_token
  attr_reader :password
  

  def self.find_by_credentials(email, password)
    member = Member.find_by(email: email)
    return nil unless member
    member.is_password?(password) ? member : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def generate_session_token
    return SecureRandom.urlsafe_base64(16)
  end    
end
