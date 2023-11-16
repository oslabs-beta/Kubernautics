const express = require('express');
const dataRouter = express.Router();
const dataController = require('../controllers/dataController')

dataRouter.post('/pull', dataController.getData, (req, res) => {
  console.log(res.locals.metric)
  res.status(200).json(res.locals.metric);
});

module.exports = dataRouter