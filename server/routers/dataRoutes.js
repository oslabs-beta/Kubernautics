const express = require('express');
const dataRouter = express.Router();
const dataController = require('../controllers/dataController')

dataRouter.post('/', dataController.getData, (req, res) => {
  res.status(200).json(res.locals.metric);
});

module.exports = dataRouter;