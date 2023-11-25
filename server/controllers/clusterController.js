const k8s = require('@kubernetes/client-node');
const clusterController = {};

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
const k8sApi1 = kc.makeApiClient(k8s.AppsV1Api);

clusterController.getPods = async (req, res, next) => {
  try {
    const podsRes = await k8sApi.listNamespacedPod('kubernautics-dev');
    const pods = podsRes.body.items;

    pods.forEach((pod, index) => {
      console.log(`Pod ${index + 1}: ${pod.metadata.name}`);
    });

    res.locals.pods = pods;
    return next();
  } catch (err) {
    console.error(err);
    next(err);
  }
};

clusterController.getNodes = async (req, res, next) => {
  try {
    const nodesRes = await k8sApi.listNode();
    const nodes = nodesRes.body.items;

    nodes.forEach((node, index) => {
      console.log(`Node ${index + 1}: ${node.metadata.name}`);
    });

    res.locals.nodes = nodes;
    return next();
  } catch (err) {
    console.error(err);
    next(err);
  }
};

clusterController.getServices = async (req, res, next) => {
  try {
    const servicesResponse = await k8sApi.listServiceForAllNamespaces();
    const services = servicesResponse.body.items;

    services.forEach((service, index) => {
      console.log(`Service ${index + 1}: ${service.metadata.name}`);
    });

    res.locals.services = services;
    return next();
  } catch (err) {
    console.error(err);
    next(err);
  }
};

clusterController.getDeployments = async (req, res, next) => {
  try {
    const deploymentsResponse = await k8sApi1.listDeploymentForAllNamespaces();
    const deployments = deploymentsResponse.body.items;

    deployments.forEach((deployment, index) => {
      console.log(`Service ${index + 1}: ${deployment.metadata.name}`);
    });

    res.locals.deployments = deployments;
    return next();
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = clusterController;
