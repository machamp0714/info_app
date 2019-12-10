# frozen_string_literal: true

class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken

  rescue_from ActiveRecord::RecordNotFound, with: :not_found_error

  private

  def render_errors(model, status, data = nil)
    response = {
      status: convert_status(status),
      errors: ErrorsSerializer.new(model).serialized_json
    }
    response = response.merge(data) if data

    render json: response, status: status
  end

  def not_found_error
    render json: { status: 404, message: "Not found" }, status: :not_found
  end

  def render_permission_error
    render json: { status: 403, message: "権限がありません" }, status: :forbidden
  end

  def convert_status(status)
    code = { unprocessable_entity: 422 }

    code[status]
  end
end
