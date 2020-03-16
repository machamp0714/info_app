# frozen_string_literal: true

class Api::AccessTokensController < ApplicationController
  def qiita_token
    authorized_url = "https://qiita.com/api/v2/oauth/authorize?client_id=#{ENV['QIITA_KEY']}&scope=read_qiita&state=#{ENV['QIITA_STATE']}"
    redis.set(:user_id, current_api_user.id)
    render json: authorized_url, status: :ok
  end
end
