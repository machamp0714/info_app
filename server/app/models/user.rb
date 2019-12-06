# frozen_string_literal: true

class User < ActiveRecord::Base
  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable
  devise :database_authenticatable, :registerable,
          :rememberable, :validatable, :omniauthable
  include DeviseTokenAuth::Concerns::User
end
