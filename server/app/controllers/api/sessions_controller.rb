class Api::SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:session][:email])
    if user&.authenticate(params[:session][:password])
      render json: { token: user.access_token.token }, status: :ok
    else
      error = {
        status: 401,
        title: "メールアドレスかパスワードが間違っています。"
      }
      render json: error, status: :unauthorized
    end
  end
end
