Rails.application.config.session_store = :redis_store, {
  servers: %w[redis://redis:6379/0/cache],
  expire_after: 90.minutes,
  key: "_info_session"
}
