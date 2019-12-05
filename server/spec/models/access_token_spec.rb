require 'rails_helper'

RSpec.describe AccessToken, type: :model do
  describe "#validation" do
    let(:access_token) { build :access_token }

    it "is invalid when token is blank" do
      access_token.token = nil
      expect(access_token).to be_invalid
    end

    it "is invalid when token is duplicate" do
      create :access_token

      expect(access_token).to be_invalid
    end
  end
end
