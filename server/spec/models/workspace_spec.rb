require 'rails_helper'

RSpec.describe Workspace, type: :model do
  describe "#validation" do
    let(:workspace) { build_stubbed :workspace }

    it "is invalid when name blank" do
      workspace.name = nil

      expect(workspace).to be_invalid
    end

    it "is invalid when name duplicate" do
      other_workspace = create :workspace
      workspace.name = other_workspace.name

      expect(workspace).to be_invalid
    end
  end
end
