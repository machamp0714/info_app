# frozen_string_literal: true

require "rails_helper"

RSpec.describe User, type: :model do
  describe "#validates" do
    let(:user) { build :user }

    context "with name validation" do
      it "is invalid when name is blank" do
        user.name = nil
        expect(user).to be_invalid
      end
    end

    context "with email validation" do
      it "is invalid when email is blank" do
        user.email = nil
        expect(user).to be_invalid
      end

      it "is invalid when email duplicate" do
        other_user = create :user
        user.email = other_user.email
        expect(user).to be_invalid
      end

      it "is case sensitive" do
        other_user = create :user
        user.email = other_user.email.upcase
        expect(user).to be_invalid
      end
    end

    context "with email validation" do
      it "is invalid when password is blank" do
        user.password = nil
        expect(user).to be_invalid
      end
    end
  end
end
