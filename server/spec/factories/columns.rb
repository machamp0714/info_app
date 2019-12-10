FactoryBot.define do
  factory :column do
    sequence(:name) { |n| "column#{n}" }
    association :workspace
  end
end
