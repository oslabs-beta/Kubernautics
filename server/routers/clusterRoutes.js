const express = require('express');
const clusterRouter = express.Router();
const clusterController = require('../controllers/clusterController')

clusterRouter.get('/nodes', clusterController.getNodes, (req, res) => {
  return res.status(200).json(res.locals.nodes);
});

clusterRouter.get('/pods', clusterController.getPods, (req, res) => {
  return res.status(200).json(res.locals.pods);
});

clusterRouter.get('/services', clusterController.getServices, (req, res) => {
  return res.status(200).json(res.locals.services);
});

module.exports = clusterRouter;