const k8s = require('@kubernetes/client-node');
const clusterController = {};

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

// Fetch all Pods within the kubernetes cluster
clusterController.getPods = async (req, res, next) => {
  try {
    const podsRes = await k8sApi.listPodForAllNamespaces();
    const pods = podsRes.body.items;
    res.locals.pods = pods;
    return next();
  } catch (err) {
    return next({
      log: `Error found in clusterController.getPods ${err}`,
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
};

// Fetch all Nodes within the kubernetes cluster
clusterController.getNodes = async (req, res, next) => {
  try {
    const nodesRes = await k8sApi.listNode();
    const nodes = nodesRes.body.items;
    res.locals.nodes = nodes;
    return next();
  } catch (err) {
    return next({
      log: `Error found in clusterController.getNodes ${err}`,
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
};

// Fetch all Services within the kubernetes cluster
clusterController.getServices = async (req, res, next) => {
  try {
    const servicesResponse = await k8sApi.listServiceForAllNamespaces();
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
      log: `Error found in clusterController.getServices ${err}`,
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
};

module.exports = clusterController;
