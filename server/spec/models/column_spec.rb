require 'rails_helper'

RSpec.describe Column, type: :model do
  describe "#validation" do
    let(:column) { build_stubbed :column }

    it "is invalid when name blank" do
      column.name = nil

      expect(column).to be_invalid
    end

    it "is invalid when name duplicate" do
      other_column = create :column
      column.name = other_column.name

      expect(column).to be_invalid
    end
  end
end
