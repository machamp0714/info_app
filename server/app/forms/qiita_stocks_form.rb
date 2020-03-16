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
      stocks_uri = URI.parse("https://qiita.com/api/v2/users/#{user_id}/stocks?page=#{page}&per_page=100")

      https = https_client(stocks_uri)
      response = https.get(stocks_uri)
      stocks = JSON.parse(response.body)

      break if stocks.length.zero?

      items << stocks
      page += 1
    end
  end
  handle_asynchronously :async

  private

  def https_client(uri)
    https = Net::HTTP.new(uri.host, uri.port)
    https.use_ssl = true
    https.verify_mode = OpenSSL::SSL::VERIFY_NONE

    https
  end
end
