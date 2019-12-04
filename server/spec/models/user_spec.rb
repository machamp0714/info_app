# frozen_string_literal: true

require "rails_helper"

RSpec.describe User, type: :model do
  let(:user) { build :user }

  describe "#validates" do
    it "nameが空の時無効であること" do
      user.name = nil
      expect(user).to be_invalid
    end

    context "#email" do
      it "emailが空の時無効であること" do
        user.email = nil
        expect(user).to be_invalid
      end

      it "emailが一意でないとき無効であること" do
        create :user, email: user.email
        expect(user).to be_invalid
      end

      it "emailのフォーマットが間違っている時無効であること" do
        email_list = [
          "123#4@gmail.com",
          "abcfga$@gmail.com",
          "abcdefg.gmail.com"
        ]
        email_list.each do |email|
          user.email = email
          expect(user).to be_invalid
        end
      end

      it "emailは大文字と小文字を区別しないこと" do
        create :user, email: user.email.upcase
        expect(user).to be_invalid
      end
    end

    context "#password" do
      it "passwordが空の時無効であること" do
        user.password = nil
        expect(user).to be_invalid
      end

      it "passwordの長さが8文字以下の時無効であること" do
        user.password = "a" * 7
        expect(user).to be_invalid
      end
    end
  end
end
