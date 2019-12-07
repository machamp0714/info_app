class Api::Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController
  def sign_up_params
    params.permit(:name, :email, :password)
  end

  protected

  def render_create_success
    render json: @resource, status: :created
  end

  def render_create_error
    errors = resource_errors.reject { |key| key == :full_messages }
    render json: { errors: errors }, status: :unprocessable_entity
  end
end
