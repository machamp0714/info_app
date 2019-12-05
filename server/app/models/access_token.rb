class AccessToken < ApplicationRecord
  after_initialize :generate_token

  belongs_to :user

  private

  def generate_token
    self.token = SecureRandom.hex(20)
  end
end
