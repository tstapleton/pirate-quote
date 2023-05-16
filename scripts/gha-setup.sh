#!/bin/bash

# make script exit when a command fails
set -e

# enable tracing with -x or disable it with +x (useful for debugging)
# tracing prints each line of the script as it executes
set +x

# merge master into branch to run
git fetch origin
git merge origin/master

yarn build
