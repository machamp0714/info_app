require 'rails_helper'

RSpec.describe User, type: :model do
  describe "#validates" do
    let(:user) { build :user }

    context "nameのvalidation" do
      it "空白の時無効であること" do
        user.name = nil
        expect(user).to be_invalid
      end
    end

    context "emailのvvalidation" do
      it "空白の時無効であること" do
        user.email = nil
        expect(user).to be_invalid
      end

      it "かぶっている時無効であること" do
        other_user = create :user
        user.email = other_user.email
        expect(user).to be_invalid
      end

      it "大文字と小文字を区別しないこと" do
        other_user = create :user
        user.email = other_user.email.upcase
        expect(user).to be_invalid
      end
    end

    context "passwordのvalidation" do
      it "空白の時無効であること" do
        user.password = nil
        expect(user).to be_invalid
      end
    end
  end
end
