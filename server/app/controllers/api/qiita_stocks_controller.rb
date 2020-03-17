# frozen_string_literal: true

class Api::QiitaStocksController < ApplicationController
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
    token = json["token"]

    authorize_uri = URI.parse("https://qiita.com/api/v2/authenticated_user")

    https = https_client(authorize_uri)

    response = https.get(authorize_uri.path, authorization: "Bearer #{token}")
    result = JSON.parse(response.body)
    user_id = result["id"]

    qiita_stocks_form = QiitaStocksForm.new(user_id)
    job = qiita_stocks_form.async

    cookies[:job_id] = { value: job.id, expires: 1.day }

    user = User.find(redis.get(:user_id).to_i)
    redirect_to "http://localhost:3000/#{user.name}/settings"
  end

  def check_async
    if asyncing?
      render json: { isAsync: "waiting" }, status: :ok
    else
      render json: { isAsync: "success" }, status: :ok
    end
  end

  private

  def asyncing?
    Delayed::Job.exists? params[:job_id]
  end
end
