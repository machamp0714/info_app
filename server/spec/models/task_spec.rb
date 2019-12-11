require 'rails_helper'

RSpec.describe Task, type: :model do
  describe "#validation" do
    let(:task) { build_stubbed :task }

    it "is invalid when title blank" do
      task.title = nil

      expect(task).to be_invalid
    end
  end
end
