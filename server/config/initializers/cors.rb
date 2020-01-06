# frozen_string_literal: true

Rails.application.config.action_controller.forgery_protection_origin_check = false
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins "localhost:3000", "info-app.com.s3-website-ap-northeast-1.amazonaws.com"

    resource "*",
             headers: :any,
             methods: %i[get post put patch delete options head],
             credentials: true,
             expose: %w[access-token client uid]
  end
end
