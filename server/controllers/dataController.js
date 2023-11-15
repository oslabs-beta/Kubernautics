const dataController = {};

dataController.getData = async (req, res, next) => {
  try {
    const response = await fetch('http://localhost:9090/api/v1/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'query=container_cpu_usage_seconds_total{namespace="default"}[20m]',
    });
    res.locals.metric = await response.json(); 
    return next();
  } catch (error) {
    return next({Error: 'Error inside of dataController'})
  }
}

module.exports = dataController;