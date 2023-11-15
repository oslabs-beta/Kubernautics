const express = require('express');
const path = require('path');
const promClient = require('prom-client');
const cors = require('cors');
const axios = require('axios');
const dataRoutes = require('./routers/routes')

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
})

app.use('/api', dataRoutes)

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

module.exports = app