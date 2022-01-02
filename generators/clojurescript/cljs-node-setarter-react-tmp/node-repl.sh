#!/bin/bash -
#===============================================================================
#
#          FILE: node-repl.sh
#
#         USAGE: ./node-repl.sh
#
#   DESCRIPTION: 
#
#       OPTIONS: ---
#  REQUIREMENTS: ---
#          BUGS: ---
#         NOTES: ---
#        AUTHOR: YOUR NAME (), 
#  ORGANIZATION: 
#       CREATED: 01/02/2022 23:59:55
#      REVISION:  ---
#===============================================================================

set -o nounset                                  # Treat unset variables as an error
clj -M -m cljs.main --repl-env node
