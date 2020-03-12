Rails.application.config.session_store :redis_store,
  servers: %w[redis://redis:6379/0/session],
  expire_after: 1.minute,
  key: "_#{Rails.application.class.parent_name.downcase}_session"
