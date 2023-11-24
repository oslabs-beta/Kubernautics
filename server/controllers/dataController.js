const dataController = {};

dataController.getData = async (req, res, next) => {
  try {
    const response = await fetch(
      'http://prometheus-kube-prometheus-prometheus:9090/api/v1/query',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'query=container_cpu_usage_seconds_total{namespace="kubernautics-dev"}[20m]',
      }
    );
    res.locals.metric = await response.json();
    return next();
  } catch (err) {
    return next({ error: 'Error inside of dataController', err });
  }
};

module.exports = dataController;
