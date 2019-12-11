# frozen_string_literal: true

require "rails_helper"

RSpec.describe Column, type: :model do
  describe "#validation" do
    let(:column) { build_stubbed :column }

    it "is invalid when name blank" do
      column.name = nil

      expect(column).to be_invalid
    end
  end
end
