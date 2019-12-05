# frozen_string_literal: true

class User < ApplicationRecord
  after_create { create_access_token }

  has_secure_password

  has_one :access_token, dependent: :destroy

  validates :name, presence: true
  validates :email,
            presence: true,
            uniqueness: { case_sensitive: false },
            format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i }
  validates :password, length: { minimum: 8 }
end
