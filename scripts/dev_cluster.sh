#!/usr/bin/env sh

# dev_cluster.sh -- bring the dev environment for the project up or down
#
# This script is responsible for taking any steps necessary to set up the
# development environment for the project, and tear down that environment
# when the developer is done working.
#
# Running this script in "down" mode should remove any modifications and deployments
# made to the cluster related to this project, but not delete the minikube
# cluster completely (in case it's being used for other purposes on this
# machine as well). It will, however, shut the minikube cluster down to free
# up those resources.
#
# The script presumes minikube and devspace are is installed on the machine,
# and will fail if those programs can't be found.

# check that required input is present
if [ "$1" != "up" ] && [ "$1" != "down" ]; then
    # provide usage guidance to the user and exit
    # with an error code
    echo "Usage: dev_cluster.sh (up|down)"
    exit 1
fi

# confirm minikube is installed
if ! command -v minikube &> /dev/null; then
    echo "Error: Could not locate minikube on the system. Is it installed?"
    exit 1
fi

# confirm devspace is installed
if ! command -v devspace &> /dev/null; then
    echo "Error: Could not locate devspace on the system. Is it installed?"
    echo "devspace can be installed by running:"
    echo "    npm install -g devspace"
    exit 1
fi

# bring cluster environment up or down
if [ $1 == 'up' ]; then
    # start the minikube cluster if it's not already running
    minikube status > /dev/null
    if [ $? -gt 0 ]; then
        minikube start
    fi
    
    # start up the devspace dev environment in a project-specific namespace
    devspace use namespace kubernautics-dev
    devspace dev
elif [ $1 == 'down' ]; then
    # reset changes devspace made to pods in the cluster
    devspace reset pods
    # remove any deployments made by devspace
    devspace purge
    # reset any variables being set by devspace
    devspace reset vars
    # stop the minikube cluster if it's running
    minikube status > /dev/null
    if [ $? -eq 0 ]; then
        minikube stop
    fi
fi

# no errors; exit cleanly
exit 0
