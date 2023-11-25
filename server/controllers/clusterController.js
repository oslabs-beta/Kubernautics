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
    res.locals.nodes = nodes;
    return next();
  } catch (err) {
    console.error(err);
    next(err);
  }
};

clusterController.getServices = async (req, res, next) => {
  try {
    const servicesResponse = await k8sApi.listNamespacedService('kubernautics-dev');
    if (!servicesResponse.body) {
      console.error('No response body found in services response:', servicesResponse);
      res.locals.services = [];
      return next();
    }
    const services = servicesResponse.body.items || [];
    res.locals.services = services;
    return next();
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = clusterController;
