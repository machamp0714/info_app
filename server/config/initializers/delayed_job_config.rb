# frozen_string_literal: true

Delayed::Worker.destroy_failed_jobs = false
Delayed::Worker.max_attempts = 1
Delayed::Worker.max_run_time = 15.minutes
Delayed::Worker.logger = Logger.new(File.join(Rails.root, "log", "delayed_job.log"))
