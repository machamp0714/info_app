class Api::WorkspacesController < ApplicationController
  before_action :authenticate_api_user!

  def create
    render status: :created
  end
end
