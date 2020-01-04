# config valid for current version and patch releases of Capistrano
lock "~> 3.11.2"

set :application, "info_app"
set :repo_url, "git@github.com:machamp0714/info_app.git"
set :deploy_to, "/var/www/info_app"
set :repo_tree, "server"
set :keep_releases, 5
set :rbenv_ruby, "2.6.5"
set :log_level, :debug
append :linked_files, "config/master.key", "config/env.yml"
append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets"

namespace :deploy do
  desc "restart application"
  task :restart do
    invoke "unicorn:restart"
  end

  desc "create database"
  task :db_create do
    on roles(:db) do |host|
      with rails_env: fetch(:rails_env) do
        within current_path do
          execute :bundle, :exec, :rake, "db:create"
        end
      end
    end
  end

  after :publishing, :restart

  after :restart, :clear_cache do
    on roles(:web), in: :groups, limit: 3, wait: 10 do
    end
  end
end
