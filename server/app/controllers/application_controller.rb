# frozen_string_literal: true

class ApplicationController < ActionController::API
  include ActionController::Cookies
  include ActionController::RequestForgeryProtection
  include UserAuthenticator
end
