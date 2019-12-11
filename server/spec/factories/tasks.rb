FactoryBot.define do
  factory :task do
    title { "MyString" }
    description { "MyString" }
    column { nil }
    user { nil }
  end
end
