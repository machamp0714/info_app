#!/bin/sh -eu

cat <<EOF >> $HOME/.ssh/config
  User tatsuya
  ForwardAgent yes
EOF

eval $(ssh-agent)
ssh-add
cd server
bundle exec cap production deploy
