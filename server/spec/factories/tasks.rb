# frozen_string_literal: true

FactoryBot.define do
  factory :task do
    content { "sample task" }
    sequence(:rank) { |n| n }
    association :user
    association :column
  end
end
