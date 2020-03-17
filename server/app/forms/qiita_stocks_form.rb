# frozen_string_literal: true

class QiitaStocksForm
  attr_accessor :user_id

  def initialize(user_id)
    @user_id = user_id
  end

  def async
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
  handle_asynchronously :async
end
