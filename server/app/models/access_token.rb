class AccessToken < ApplicationRecord
  after_initialize :generate_token

  belongs_to :user

  validates :token,
            presence: true,
            uniqueness: { case_sensitive: true }

  private

  def generate_token
    new_token = SecureRandom.hex(40)

    loop do
      break if token.present? && !AccessToken.exists?(token: new_token)

      self.token = new_token
    end
  end
end
