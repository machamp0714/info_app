class Api::Client::Qiita < Api::Client::Base
  def initialize(token = nil)
    site = "https://qiita.com"
    headers = { "Content-Type" => "application/json" }
    headers.merge!("Authorization" => "Bearer #{token}") unless token.nil?
    @client = Faraday.new(site, headers: headers) do |builder|
      builder.request :url_encoded
      builder.response :json
      builder.adapter Faraday.default_adapter 
    end
  end

  def get_token(params)
    post("/api/v2/access_tokens", params)
  end

  def get_user
    get("/api/v2/authenticated_user")
  end
end