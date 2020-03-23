# frozen_string_literal: true

require "rails_helper"

RSpec.describe "QiitaStocks", type: :request do
  describe "GET /qiita_stocks" do
    context "when no authorized" do
      subject(:get_unauthorized) { get api_qiita_stocks_path }

      it_behaves_like "unauthorized_error"
    end
  end
end
