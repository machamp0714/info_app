# frozen_string_literal: true

class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken

  protected

  def render_errors(model, status, data = nil)
    response = {
      status: convert_status(status),
      errors: ErrorsSerializer.new(model).serialized_json
    }
    response = response.merge(data) if data

    render json: response, status: status
  end

  private

  def convert_status(status)
    code = { unprocessable_entity: 422 }

    code[status]
  end
end
