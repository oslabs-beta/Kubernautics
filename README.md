# Kubernautics

## Setting Up the Dev Environment
The dev environment for Kubernautics places the app inside a local Kubernetes cluster while you iterate, so changes to code can be evaluated in an environment as close to a production scenario as possible. Changes to the codebase are made locally and are hot-loaded into the cluster as you work.

### Prerequisites
The script that sets up the dev environment assumes the following programs are installed and present on your `$PATH`:
- `minikube`
- `devspace`

`minikube` should be installed in whatever way is most appropriate for your system. [See the docs here for guidance](https://minikube.sigs.k8s.io/docs/start/).

`devspace` is most easily installed by running --
```
npm install -g devspace
```
-- [alternate install methods are described here](https://www.devspace.sh/docs/getting-started/installation).
### Starting Up
You can set up the dev cluster by running --

```
npm run cluster up
```
This will start up your minikube cluster, create a `kubernautics-dev` cluster namespace, set up all the necessary deployments/services, and give you a shell sitting inside a container on the cluster from which you can run kubernautics --
```
npm run dev
```
Kubernautics makes use of `webpack-dev-server` and `nodemon` in development mode to pick up changes to the codebase. Once up and running, changes made to the code will be reflected in-cluster.

To leave the container and return your terminal to your local machine's context, simply run --
```
exit
```

### Tearing Down
The project can be removed from your minikube cluster, and the cluster itself shut down, by `exit`ing the container shell environment and running --
```
npm run cluster down
```
-- on your local machine.
