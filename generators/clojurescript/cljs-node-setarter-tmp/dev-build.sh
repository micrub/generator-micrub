#!/bin/bash -x
#===============================================================================
#
#          FILE: start-dev.sh
#
#         USAGE: ./start-dev.sh
#
#   DESCRIPTION: 
#
#       OPTIONS: ---
#  REQUIREMENTS: ---
#          BUGS: ---
#         NOTES: ---
#        AUTHOR: YOUR NAME (), 
#  ORGANIZATION: 
#       CREATED: 01/02/2022 23:45:40
#      REVISION:  ---
#===============================================================================

set -o nounset                                  # Treat unset variables as an error
clj -M -m cljs.main --target node --output-to main.js -c hlo-wrd.core
