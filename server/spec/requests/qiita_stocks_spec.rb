# frozen_string_literal: true

require "rails_helper"

RSpec.describe "QiitaStocks", type: :request do
  describe "GET /qiita_stocks" do
    context "when no authorized" do
      subject(:get_unauthorized) { get api_qiita_stocks_path }

      it_behaves_like "unauthorized_error"
    end

    context "requests with authorized header" do
      subject(:get_stocks) { get api_qiita_stocks_path, headers: auth_headers }

      let(:user) { create :user }
      let(:auth_headers) { user.create_new_auth_token }
      let!(:stocks) { create_list :qiita_stock, 10, user: user }

      it "returns 200 status code" do
        get_stocks

        expect(response).to have_http_status :ok
      end

      it "returns proper json body" do
        get_stocks

        expect(json).to include(
          "id" => stocks[0]["id"],
          "title" => stocks[0]["title"],
          "url" => stocks[0]["url"]
        )
      end
    end
  end
end
