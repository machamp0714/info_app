# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    sequence(:name) { |n| "name#{n}" }
    sequence(:email) { |n| "example#{n}@gmail.com" }
    password { "passwordsample" }
    avatar_url { "avatar_url" }
  end
end
