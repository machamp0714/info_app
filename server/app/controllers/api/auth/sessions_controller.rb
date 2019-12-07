class Api::Auth::SessionsController < DeviseTokenAuth::SessionsController
  private

  def resource_params
    params.permit(:email, :password)
  end

  protected

  def render_create_success
    render json: @resource, status: :ok
  end

  def render_create_error_bad_credentials
    render json: { status: 401, message: "メールアドレスかパスワードが間違っています。" }, status: :unauthorized
  end
end
