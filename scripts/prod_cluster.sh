#!/usr/bin/env sh

# check that required input is present
if [ "$1" != "up" ] && [ "$1" != "down" ]; then
    # provide usage guidance to the user and exit
    # with an error code
    echo "Usage: prod_cluster.sh (up|down)"
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
    # start/restart
    minikube delete -p kubernautics-prod
    minikube start -p kubernautics-prod
    minikube profile kubernautics-prod
    devspace cleanup images
    rm -rf dist/
    npm run build
    devspace use namespace kubernautics
    devspace deploy -b
    minikube service kubernautics-service -n kubernautics
elif [ $1 == 'down' ]; then
    # stop
    minikube delete -p kubernautics-prod
fi

exit 0
