# frozen_string_literal: true

class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  include ActionController::Cookies
  include ActionController::RequestForgeryProtection

  protect_from_forgery with: :exception if Rails.env.production?
  rescue_from ActiveRecord::RecordNotFound, with: :not_found_error

  def csrf_token
    cookies["CSRF_TOKEN"] = form_authenticity_token
  end

  private

  def render_errors(model, data = nil)
    response = {
      status: 422,
      errors: ErrorsSerializer.new(model).serialized_json
    }
    response = response.merge(data) if data

    render json: response, status: :unprocessable_entity
  end

  def render_authorization_error
    render json: { status: 401, message: "アカウント登録もしくはログインしてください" }, status: :unauthorized
  end

  def render_permission_error
    render json: { status: 403, message: "権限がありません" }, status: :forbidden
  end

  def not_found_error
    render json: { status: 404, message: "Not found" }, status: :not_found
  end

  def session_clear
    request.session_options[:skip] = true
  end

  def https_client(uri)
    https = Net::HTTP.new(uri.host, uri.port)
    https.use_ssl = true
    https.verify_mode = OpenSSL::SSL::VERIFY_NONE

    return https
  end
end
