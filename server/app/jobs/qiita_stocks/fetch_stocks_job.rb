# frozen_string_literal: true

module QiitaStocks
  FetchStocksJob = Struct.new(:user_id) do
    def perform
      page = 1
      items = []

      loop do
        response = Faraday.get("https://qiita.com/api/v2/users/#{user_id}/stocks?page=#{page}&per_page=100")
        stocks = JSON.parse(response.body)

        break if stocks.length.zero?

        items << stocks
        page += 1
      end
    end
  end
end
