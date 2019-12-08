# frozen_string_literal: true

class Api::Auth::OmniauthCallbacksController < DeviseTokenAuth::OmniauthCallbacksController
  def redirect_callbacks
    # derive target redirect route from "resource_class" param, which was set
    # before authentication.
    devise_mapping = get_devise_mapping
    redirect_route = get_redirect_route(devise_mapping)

    # preserve omniauth info for success route. ignore "extra" in twitter
    # auth response to avoid CookieOverflow.
    session["dta.omniauth.auth"] = request.env["omniauth.auth"].except("extra")
    session["dta.omniauth.params"] = request.env["omniauth.params"]

    redirect_to redirect_route
  end

  def omniauth_success
    get_resource_from_auth_hash
    set_token_on_resource
    create_auth_params

    sign_in(:user, @resource, store: false, bypass: false)

    if @resource.save
      update_auth_header

      render json: @resource, status: :ok
    else
      render json: { status: 401, message: "認証に失敗しました" }, status: :unauthorized
    end
  end
end
