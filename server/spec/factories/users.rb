# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    sequence(:name) { |n| "username#{n}" }
    sequence(:email) { |n| "email#{n}@gmail.com" }
    image { "url" }
    password { "password" }
    provider { "email" }
    uid { "" }
  end
end
