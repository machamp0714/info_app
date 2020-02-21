# frozen_string_literal: true

class Api::AccessTokensController < ApplicationController
  def qiita_token
    authorized_url = "https://qiita.com/api/v2/oauth/authorize?client_id=#{ENV['QIITA_KEY']}&scope=read_qiita&state=e26f6809a998135d6162d4709004eef44dbc03ab384e9e7e0fc700ed07ff54efae58afee75cd9773"
    session[:name] = current_api_user.name
    render json: authorized_url, status: :ok
  end

  def qiita
    redirect_to "http://localhost:3000/#{name}/settings"
  end
end
