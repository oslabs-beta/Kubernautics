const express = require('express');
const path = require('path');
const cors = require('cors');
const dataRoutes = require('./routers/dataRoutes');
const clusterRoutes = require('./routers/clusterRoutes');

const app = express();
const PORT = process.env.EXPRESS_PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));

// Route Handlers 
app.use('/api/pull', dataRoutes);

app.use('/api/clusterMap', clusterRoutes);

app.get('/', (req, res) => {
  res.status(200).sendFile('src/components/pages/Dashboard/index.html');
});

module.exports = app;
