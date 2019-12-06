class Api::OmniauthCallbacksController < ApplicationController
  def github
    render json: { code: params[:code] }, status: :ok
  end
end
