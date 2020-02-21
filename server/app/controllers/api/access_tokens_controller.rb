# frozen_string_literal: true

class Api::AccessTokensController < ApplicationController
  def qiita_token
    authorized_url = "https://qiita.com/api/v2/oauth/authorize?client_id=#{ENV['QIITA_KEY']}&scope=read_qiita&state=#{ENV['QIITA_STATE']}"
    session[:user_id] = current_api_user.id

    session["warden.user.user.key"] = nil

    render json: authorized_url, status: :ok
  end

  def qiita
    render_permission_error unless ENV["QIITA_STATE"] == params[:state]

    uri = URI.parse("https://qiita.com/api/v2/access_tokens")
    https = https_client(uri)

    data = {
      client_id: ENV["QIITA_KEY"],
      client_secret: ENV["QIITA_SECRET"],
      code: params[:code]
    }

    response = https.post(
      uri.path,
      data.to_json,
      "content-type" => "application/json"
    )
    json = JSON.parse(response.body)

    render json: json, status: :ok
  end
end
