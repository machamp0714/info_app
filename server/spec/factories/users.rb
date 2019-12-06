FactoryBot.define do
  factory :user do
    sequence(:name) { |n| "username#{n}" }
    sequence(:email) { |n| "email#{n}@gmail.com" }
    avatar_url { "url" }
    password { "password" }
  end
end
