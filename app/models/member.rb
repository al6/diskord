class Member < ApplicationRecord
  validates :email, :username, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true, 'valid_email_2/email': true
  validates :email, length: {maximum: 100}
  validates :username, length: {maximum: 32}
  validates :password, length: { minimum: 6, allow_nil: true }
  
  has_many :guild_memberships
  has_many :dm_memberships
  
  has_many :dm_channels,
    through: :dm_memberships,
    source: :channel

  has_many :guilds,
    through: :guild_memberships,
    source: :guild

  after_create :welcome
  after_initialize :ensure_session_token
  attr_reader :password
  
  def welcome
    if self.email != "albert@a.com"
      albert = Member.find_by(email: "albert@a.com")
      dm_membership = DmMembership.create!(first_member_id: albert.id, second_member_id: self.id)
      
      welcome_message = Message.create!(author_id: albert.id, channel_id: dm_membership.channel_id, body: "Thanks for checking out my project! :) Personal site: https://albertlee.io Resume: https://albertlee.io/assets/css/images/site-resume.pdf")
      welcome_gif = File.open('app/assets/images/welcome.gif')
      welcome_message.image.attach(io: welcome_gif, filename: 'welcome.gif')

      space_demo_message = Message.create!(author_id: albert.id, channel_id: dm_membership.channel_id, body: "https://albertlee.io/space-blasters Check out this game if you like Star Wars")
      sb_gif = File.open('app/assets/images/space_blasters.gif')
      space_demo_message.image.attach(io: sb_gif, filename: 'space_blasters.gif')


      dash_demo_message = Message.create!(author_id: albert.id, channel_id: dm_membership.channel_id, body: "https://themorningdash.herokuapp.com Get your weather, commute, and calendar in once place here")
      dash_image = File.open('app/assets/images/tmd_teaser.png')
      dash_demo_message.image.attach(io: dash_image, filename: 'tmd_teaser.png')
    end
  end

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
