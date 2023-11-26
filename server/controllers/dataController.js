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
        body: `query=${req.body.query}`,
      }
    );
    res.locals.metric = await response.json();
    return next();
  } catch (err) {
    return next({
      log: `Error found in dataController.getData ${err}`,
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
};

module.exports = dataController;
