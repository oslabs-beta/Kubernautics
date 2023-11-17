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

MINIKUBE_PROFILE=kubernautics

profile_exists() {
    profile_match=$(minikube profile list | cut -d "|" -f 2 | grep -E "^\s$MINIKUBE_PROFILE\s$" | wc -l)
    if [ $profile_match -eq 0 ]; then
        return 1 # profile doesn't exist
    else
        return 0 # profile exists
    fi
}

cluster_is_running() {
    minikube status > /dev/null
    return $?
}

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
    # check if project's minikube profile exists
    if profile_exists; then
        echo "==> Switching the active minikube profile to '$MINIKUBE_PROFILE'..."
        minikube profile $MINIKUBE_PROFILE
    else
        echo "==> minikube profile '$MINIKUBE_PROFILE' doesn't yet exist. Will create."
    fi

    # start the minikube cluster if it's not already running
    if ! cluster_is_running; then
        echo "==> Starting up the minikube cluster..."
        minikube start -p $MINIKUBE_PROFILE
    fi
    
    # start up the devspace dev environment in a project-specific k8s namespace
    devspace use namespace kubernautics-dev
    devspace dev
elif [ $1 == 'down' ]; then
    # ensure the project's cluster is still present
    if profile_exists; then
        echo "==> Ensuring $MINIKUBE_PROFILE is the active minikube profile..."
        minikube profile $MINIKUBE_PROFILE
        if cluster_is_running; then
            echo "==> Shutting down the minikube cluster..."
            minikube stop -p $MINIKUBE_PROFILE
        fi
    else
        echo "==> The $MINIKUBE_PROFILE cluster seems to not exist. If it"
        echo "    is still running, you may need to shut it down manually."
    fi
fi

# no errors; exit cleanly
exit 0
