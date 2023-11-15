const express = require('express');
const dataRouter = express.Router();
const dataController = require('../controllers/dataController')

dataRouter.post('/pull', dataController.getData, (req, res) => {
  console.log('Sucessful data fetch');
  console.log(res.locals.metric)
  res.status(200).send(res.locals.metric);
});

module.exports = dataRouter