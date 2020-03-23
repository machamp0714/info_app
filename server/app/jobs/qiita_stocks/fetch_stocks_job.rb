# frozen_string_literal: true

module QiitaStocks
  FetchStocksJob = Struct.new(:account_id, :user) do
    def perform
      page = 1
      items = []

      loop do
        response = Faraday.get("https://qiita.com/api/v2/users/#{account_id}/stocks?page=#{page}&per_page=100")
        stocks = JSON.parse(response.body)

        break if stocks.length.zero?

        stocks.each do |stock|
          items << user.qiita_stocks.build(title: stock["title"], url: stock["url"])
        end
        page += 1
      end
      QiitaStock.import items
    end
  end
end
