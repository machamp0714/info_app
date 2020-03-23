# frozen_string_literal: true

require "rails_helper"

RSpec.describe "QiitaStocks", type: :request do
  describe "GET /qiita_stocks" do
    it "works! (now write some real specs)" do
      get qiita_stocks_index_path
      expect(response).to have_http_status(200)
    end
  end
end
