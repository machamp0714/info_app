# frozen_string_literal: true

class ApplicationController < ActionController::API
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

  def not_found_error
    render json: { status: 404, message: "Not found" }, status: :not_found
  end

  def render_permission_error
    render json: { status: 403, message: "権限がありません" }, status: :forbidden
  end

  def session_clear
    session["warden.user.user.key"] = nil if session["warden.user.user.key"]
  end
end
