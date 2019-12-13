# frozen_string_literal: true

FactoryBot.define do
  factory :column do
    sequence(:name) { |n| "column#{n}" }
    association :workspace
    association :user
  end
end
