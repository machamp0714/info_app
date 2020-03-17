# frozen_string_literal: true

class Api::QiitaStocksController < ApplicationController
  def qiita
    render_permission_error unless ENV["QIITA_STATE"] == params[:state]

    response = Faraday.post(
      "https://qiita.com/api/v2/access_tokens",
      data(params[:code]).to_s,
      "Content-Type" => "application/json"
    )
    json = JSON.parse(response.body)
    token = json["token"]

    conn = Faraday.new(
      "https://qiita.com",
      headers: { "Authorization" => "Bearer #{token}" }
    )
    response = conn.get("/api/v2/authenticated_user")
    json = JSON.parse(response.body)
    user_id = json["id"]

    qiita_stocks_form = QiitaStocksForm.new(user_id)
    job = qiita_stocks_form.async

    cookies[:job_id] = { value: job.id, expires: 1.day }

    user = User.find(redis.get(:user_id).to_i)
    redirect_to "#{ENV['SERVER_HOST']}/#{user.name}/settings"
  end

  def check_async
    if asyncing?
      render json: { isAsync: "waiting" }, status: :ok
    else
      render json: { isAsync: "success" }, status: :ok
    end
  end

  private

  def data(code)
    {
      client_id: ENV["QIITA_KEY"],
      client_secret: ENV["QIITA_SECRET"],
      code: code
    }.to_json
  end

  def asyncing?
    Delayed::Job.exists? params[:job_id]
  end
end
