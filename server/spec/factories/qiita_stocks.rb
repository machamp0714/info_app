# frozen_string_literal: true

FactoryBot.define do
  factory :qiita_stock do
    sequence(:title) { |n| "article title#{n}" }
    sequence(:url) { |n| "https://qiita.com/user/items/#{n}" }
    association :user
  end
end
