# frozen_string_literal: true

module ReatClient
  extend ActiveSupport::Concern

  def https_client(uri)
    https = Net::HTTP.new(uri.host, uri.port)
    https.use_ssl = true
    https.verify_mode = OpenSSL::SSL::VERIFY_NONE

    https
  end
end
