class Api::Auth::OmniauthCallbacksController < DeviseTokenAuth::OmniauthCallbacksController
  def omniauth_success
    get_resource_from_auth_hash
    set_token_on_resource
    create_auth_params
    update_auth_header

    sign_in(:user, @resource, store: false, bypass: false)

    @resource.save!

    render json: @resource, status: :ok
  end

  def omniauth_failure
    render json: { status: 401, message: "認証に失敗しました" }, status: :unauthorized
  end
end
