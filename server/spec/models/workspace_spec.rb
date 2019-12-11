# frozen_string_literal: true

require "rails_helper"

RSpec.describe Workspace, type: :model do
  describe "#validation" do
    let(:workspace) { build_stubbed :workspace }

    it "is invalid when name blank" do
      workspace.name = nil

      expect(workspace).to be_invalid
    end
  end
end
