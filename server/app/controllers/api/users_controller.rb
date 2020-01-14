# frozen_string_literal: true

class Api::UsersController < ApplicationController
  before_action :authenticate_api_user!

  def currentuser
    render json: current_api_user, status: :ok
  end
end
