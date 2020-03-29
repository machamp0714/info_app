class Api::Client::Base
  def get(url)
    @client.get { |req| req.url url }
  end

  def post(url, params)
    @client.post do |req|
      req.url url
      req.body = params
    end
  end
end
