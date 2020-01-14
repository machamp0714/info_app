# frozen_string_literal: true

class Api::UsersController < ApplicationController
  before_action :authenticate_api_user!

  def current_user

  end
end