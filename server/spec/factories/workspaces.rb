FactoryBot.define do
  factory :workspace do
    sequence(:name) { |n| "workspace#{n}" }
    association :user
  end
end
