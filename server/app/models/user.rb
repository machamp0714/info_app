# frozen_string_literal: true

class User < ApplicationRecord
  extend Devise::Models
  devise :database_authenticatable, :registerable,
         :rememberable, :validatable, :omniauthable
  include DeviseTokenAuth::Concerns::User

  validates :name, presence: true
  validates :email, uniqueness: { case_sensitive: false }
end
