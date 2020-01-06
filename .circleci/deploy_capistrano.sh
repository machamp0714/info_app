#!/bin/sh -eu

cat <<EOF >> $HOME/.ssh/config
  User tatsuya
  ForwardAgent yes
EOF

cd server
bundle exec cap production deploy
