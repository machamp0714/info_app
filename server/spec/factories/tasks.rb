# frozen_string_literal: true

FactoryBot.define do
  factory :task do
    content { "sample task" }
    association :user
    association :column
  end
end
