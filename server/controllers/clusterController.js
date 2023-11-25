const k8s = require('@kubernetes/client-node');
const clusterController = {};

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

clusterController.getPods = async (req, res, next) => {
  try {
    const podsRes = await k8sApi.listNamespacedPod('kubernautics-dev');
    const pods = podsRes.body.items;
    res.locals.pods = pods;
    return next();
  } catch (err) {
    return next({
      log: 'Error found in clusterController.getPods',
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
};

clusterController.getNodes = async (req, res, next) => {
  try {
    const nodesRes = await k8sApi.listNode();
    const nodes = nodesRes.body.items;
    res.locals.nodes = nodes;
    return next();
  } catch (err) {
    return next({
      log: 'Error found in clusterController.getNodes',
      status: 500,
      message: { err: 'An error occurred' },
    });
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
    const services = servicesResponse.body.items;
    res.locals.services = services;
    return next();
  } catch (err) {
    return next({
      log: 'Error found in clusterController.getServices',
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
};

module.exports = clusterController;
