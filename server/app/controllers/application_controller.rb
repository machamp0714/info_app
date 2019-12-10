# frozen_string_literal: true

class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken

  rescue_from ActiveRecord::RecordNotFound, with: :not_found_error

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
end
