# frozen_string_literal: true

class Api::QiitaStocksController < ApplicationController
  before_action :authenticate_api_user!, only: %i[index]

  def index
    stocks = current_api_user.qiita_stocks.page(params[:page] || 1).per(20)

    render json: stocks, meta: pagination(stocks), adapter: :json, status: :ok
  end

  def callback
    render_permission_error unless ENV["QIITA_STATE"] == params[:state]

    token = client.get_token(data(params[:code]).to_s).body.fetch("token")
    account_id = client(token).get_user.body.fetch("id")

    current_user = User.find(redis.get(:user_id))
    job = Delayed::Job.enqueue fetch_stocks_job(account_id, current_user)

    cookies[:job_id] = { value: job.id, expires: 1.day }

    redirect_to "#{ENV['SERVER_HOST']}/#{current_user.name}/settings"
  end

  def check_async
    job = Delayed::Job.find_by(id: params[:job_id])

    if job.nil?
      render json: { isAsync: "success" }, status: :ok
    elsif !job.last_error.nil?
      render json: { isAsync: "failed" }, status: :ok
    else
      render json: { isAsync: "waiting" }, status: :ok
    end
  end

  private

  def client(token = nil)
    Api::Client::Qiita.new(token)
  end

  def fetch_stocks_job(account_id, user)
    QiitaStocks::FetchStocksJob.new(account_id, user)
  end

  def data(code)
    {
      client_id: ENV["QIITA_KEY"],
      client_secret: ENV["QIITA_SECRET"],
      code: code
    }.to_json
  end
end
