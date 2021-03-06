# frozen_string_literal: true

class Api::Auth::SessionsController < DeviseTokenAuth::SessionsController
  protected

  def render_create_success
    render json: @resource, status: :ok
  end

  def render_create_error_bad_credentials
    render json: { status: 401, message: "メールアドレスかパスワードが間違っています。" }, status: :unauthorized
  end

  def render_destroy_success
    head :no_content
  end
end
