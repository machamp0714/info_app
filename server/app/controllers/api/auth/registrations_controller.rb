# frozen_string_literal: true

class Api::Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController
  def sign_up_params
    params.permit(:name, :email, :password)
  end

  protected

  def render_create_success
    render json: @resource, status: :created
  end

  def render_create_error
    errors = ErrorsSerializer.new(@resource).serialized_json
    render json: { errors: errors }, status: :unprocessable_entity
  end
end
