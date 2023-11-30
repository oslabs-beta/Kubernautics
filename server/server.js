const express = require('express');
const path = require('path');
const cors = require('cors');
const dataRoutes = require('./routers/dataRoutes');
const clusterRoutes = require('./routers/clusterRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));

// Route Handlers
app.use('/api/pull', dataRoutes);

app.use('/api/clusterMap', clusterRoutes);

app.get('/', (req, res) => {
  res.status(200).sendFile('src/components/pages/Dashboard/index.html');
});

// Unknown Route Handler 
app.use((req, res) => {
  return res.status(404).send('Page not found');
});

// Global Error Handler
app.use((err, req, res, next) => {
  const globalError = {
    log: 'Global Error Found',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, globalError, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

module.exports = app;
