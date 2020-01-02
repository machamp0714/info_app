#!/bin/bash -eu

cat <<EOF >> $HOME/.ssh/config
  User tatsuya
  ForwardAgent yes
EOF

eval $(ssh-agent)
ssh-add

bundle exec cap production deploy
