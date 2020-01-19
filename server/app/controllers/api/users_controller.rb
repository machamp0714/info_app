# frozen_string_literal: true

class Api::UsersController < ApplicationController

  def currentuser
    user = current_api_user
    session_clear
    if user
      render json: user, status: :ok
    else
      render_authorization_error
    end
  end
end
