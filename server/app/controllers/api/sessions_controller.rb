class Api::SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:session][:email])
    if user&.authenticate(params[:session][:password])
      session[:user_id] = user.id
      render status: :ok
    else
      error = {
        status: 401,
        title: "メールアドレスかパスワードが間違っています。"
      }
      render json: error, status: :unauthorized
    end
  end
end
