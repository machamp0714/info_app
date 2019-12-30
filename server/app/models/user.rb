# frozen_string_literal: true

class User < ApplicationRecord
  extend Devise::Models
  devise :database_authenticatable, :registerable,
         :rememberable, :validatable, :omniauthable
  include DeviseTokenAuth::Concerns::User

  validates :name, presence: true
  validates :email, uniqueness: { case_sensitive: false }

  has_many :workspaces, dependent: :destroy
  has_many :columns, dependent: :destroy
  has_many :tasks, dependent: :destroy

  def self.get_email(auth)
    auth["email"] || "github-#{auth['id']}@example.com"
  end
end
