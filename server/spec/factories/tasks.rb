FactoryBot.define do
  factory :task do
    title { "MyString" }
    description { "MyString" }
    association :user
    association :column
  end
end
