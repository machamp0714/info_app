# frozen_string_literal: true

require "net/https"

class Api::Auth::OmniauthCallbacksController < DeviseTokenAuth::OmniauthCallbacksController
  def twitter
    oauth_url = "https://github.com/login/oauth/authorize?client_id=#{ENV['GITHUB_KEY']}&scope=read%20user"

    render json: { url: oauth_url }, status: :ok
  end

  def redirect_callbacks
    uri = URI.parse("https://github.com/login/oauth/access_token")
    https = Net::HTTP.new(uri.host, uri.port)
    https.use_ssl = true
    request = Net::HTTP::Post.new(uri.path)
    data = {
      client_id: ENV["GITHUB_KEY"],
      client_secret: ENV["GITHUB_SECRET"],
      code: params[:code]
    }
    request.body = data.to_json
    request["Content-Type"] = "application/json"
    request["Accept"] = "application/json"

    response = https.start { |http| http.request(request) }

    access_token = JSON.parse(response.body).fetch("access_token")
    cookies[:access_token] = access_token

    redirect_to "http://localhost:3001/api/auth/github/callback"
  end

  def omniauth_success
    uri = URI.parse("https://api.github.com/user")
    https = Net::HTTP.new(uri.host, uri.port)
    https.use_ssl = true

    request = Net::HTTP::Get.new(uri.path)
    request["Authorization"] = "token #{cookies[:access_token]}"

    res = https.start { |http| http.request(request) }

    auth = JSON.parse(res.body)

    user = User.find_by(uid: auth["id"], provider: "github")
    user ||= User.create(
      uid: auth["id"],
      name: auth["login"],
      image: auth["avatar_url"],
      provider: "github",
      email: User.get_email(auth),
      password: Devise.friendly_token[0, 20]
    )
    token = user.create_token
    header = user.build_auth_header(token.token, token.client)
    cookies["access-token"] = header["access-token"]
    cookies["client"] = header["client"]
    cookies["uid"] = header["uid"]
    cookies["expiry"] = header["expiry"]
  end
end
